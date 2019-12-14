import { Button, Form, Text, Textarea } from "@anoblet/lit-form";
import {
  LitElement,
  css,
  customElement,
  html,
  property,
  query
} from "lit-element";

import { BeforeRenderMixin } from "@anoblet/mixins";
import { addDocument } from "@anoblet/firebase";
import globalStyle from "../styles/global";
import page from "page";
import { stringToSlug } from "@anoblet/string-to-slug";

@customElement("page-create")
class PageCreate extends BeforeRenderMixin(LitElement) {
  @query("[name='slug']") slug: HTMLInputElement;
  @query("[name='title']") pageTitle: HTMLInputElement;

  async beforeRender() {
    await import("@anoblet/quill-js");
  }

  firstUpdated() {
    this.pageTitle.addEventListener("input", this.titleToSlug.bind(this));
  }

  protected titleToSlug(e) {
    this.slug.value = stringToSlug(e.target.value);
  }

  async onSubmit() {
    const formData = [...new FormData(this.shadowRoot.querySelector("form"))];
    const data = {};
    formData.map(([key, value]) => {
      data[key] = value;
    });
    const result = await addDocument("/pages", data);
    const appComponent: any = document.querySelector("app-component");
    if (result) {
      appComponent.toast.content = "Document added successfully";
      appComponent.toast.show();
      page(`/page/read/${result}`);
    } else {
      appComponent.toast.content = "Error adding document";
      appComponent.toast.show();
    }
  }

  static styles = [
    globalStyle,
    css`
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

      button {
        margin: inherit;
      }
    `
  ];

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
        actions: [
          new Button({
            text: "Submit",
            toTemplateResult: function() {
              return html`
                <button-component
                  @click=${function() {
                    this.onSubmit();
                  }}
                  >${this.text}</button-component
                >
              `;
            }
          })
        ]
      }).render()}
    `;
  }

  @property() status;
}
