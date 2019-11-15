import "@anoblet/quill-js";

import { Form, Text, Textarea } from "@anoblet/lit-form";
import { LitElement, css, customElement, html, property } from "lit-element";

import Firebase from "../Firebase";
import page from "page";

@customElement("page-create")
export class PageCreate extends LitElement {
  static styles = css`
    form {
      display: grid;
      grid-gap: 1rem;
    }
  `;

  render() {
    return html`
      ${new Form({
        fields: [
          new Text({ name: "title", label: "Title" }),
          new Textarea({
            name: "body",
            label: "Body",
            render: function() {
              return html`
                <label>${this.label}</label
                ><quill-js
                  disable-shadow
                  format="delta"
                  name=${this.name}
                ></quill-js>
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
          const result = await Firebase.addDocument("/pages", data);
          // result
          //   ? page(`/page/read/${result}`)
          //   : (this.status = "Error adding document");
        }
      }).render()}
      ${this.status}
    `;
  }

  @property() status;
}
