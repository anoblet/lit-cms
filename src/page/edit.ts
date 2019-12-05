import("@anoblet/quill-js");

import { Form, Text, Textarea } from "@anoblet/lit-form";
import {
  LitElement,
  css,
  customElement,
  html,
  property,
  query
} from "lit-element";
import { getDocument, updateDocument } from "@anoblet/firebase";

import { BeforeRenderMixin } from "@anoblet/mixins";
import page from "page";
import { stringToSlug } from "@anoblet/string-to-slug";

@customElement("page-edit")
class PageEdit extends BeforeRenderMixin(LitElement) {
  @property({ type: String }) data;

  @query("[name='slug']") slug;
  @query("[name='title']") title;
  @query("quill-js") editor;

  async beforeRender() {
    this.data = await getDocument(`pages/${this.id}`);
  }

  firstUpdated() {
    const quillElement: any = this.editor;
    quillElement.updateComplete.then(() => {
      quillElement.quill.root.innerHTML = this.data.body;
    });
    this.title.addEventListener("input", this.titleToSlug.bind(this));
  }

  protected titleToSlug(e) {
    this.slug.value = stringToSlug(e.target.value);
  }

  static styles = css`
    form {
      display: grid;
      grid-gap: 1rem;
    }

    quill-js {
      display: block;
      position: relative;
    }

    .textarea label {
      margin-bottom: 1rem;
    }

    label {
      display: block;
    }
  `;

  render() {
    return html`
      ${new Form({
        fields: [
          new Text({ name: "title", label: "Title", value: this.data.title }),
          new Text({
            name: "slug",
            label: "Slug",
            value: this.data.slug,
            readonly: true
          }),
          new Text({
            name: "sortOrder",
            label: "Sort order",
            value: this.data.sortOrder
          }),
          new Textarea({
            name: "body",
            label: "Body",
            render: function() {
              return html`
                <div class="textarea">
                  <label>${this.label}</label
                  ><quill-js name=${this.name} disable-shadow></quill-js>
                </div>
              `;
            }
          })
        ],
        onSubmit: async () => {
          const formData = [
            ...new FormData(this.shadowRoot.querySelector("form"))
          ];
          const data = {};
          formData.map(([key, value]) => {
            data[key] = value;
          });
          const result: any = await updateDocument(`/pages/${this.id}`, data);
          result ? page(`/${this.data.slug}`) : alert("Error");
        }
      }).render()}
    `;
  }
}
