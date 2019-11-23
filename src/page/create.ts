import "@anoblet/quill-js";

import { Form, Text, Textarea } from "@anoblet/lit-form";
import {
  LitElement,
  css,
  customElement,
  html,
  property,
  query
} from "lit-element";

import { addDocument } from "@anoblet/firebase";
import page from "page";
import { stringToSlug } from "@anoblet/string-to-slug";

@customElement("page-create")
export class PageCreate extends LitElement {
  @query("[name='slug']") slug: HTMLInputElement;
  @query("[name='title']") pageTitle: HTMLInputElement;

  firstUpdated() {
    this.pageTitle.addEventListener("input", this.titleToSlug.bind(this));
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
          new Text({ name: "title", label: "Title", value: "" }),
          new Text({ name: "slug", label: "Slug", value: "", readonly: true }),
          new Text({ name: "sortOrder", label: "Sort order", value: "0" }),
          new Textarea({
            name: "body",
            label: "Body",
            render: function() {
              return html`
                <div class="textarea">
                  <label>${this.label}</label
                  ><quill-js
                    disable-shadow
                    format="delta"
                    name=${this.name}
                  ></quill-js>
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
          const result = await addDocument("/pages", data);
          console.log(result);
          result
            ? page(`/page/read/${result}`)
            : (this.status = "Error adding document");
        }
      }).render()}
      ${this.status}
    `;
  }

  @property() status;
}
