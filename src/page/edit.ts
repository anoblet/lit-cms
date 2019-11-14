import "@anoblet/quill-js";

import { Form, Text, Textarea } from "@anoblet/lit-form";
import { LitElement, css, customElement, html, property } from "lit-element";

import { BeforeRenderMixin } from "@anoblet/mixins";
import Firebase from "../Firebase";

@customElement("page-edit")
class PageEdit extends BeforeRenderMixin(LitElement) {
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
          new Text({ name: "title", label: "Title", value: this.data.title }),
          new Textarea({
            name: "body",
            label: "Body",
            render: function() {
              return html`
                <label>${this.label}</label
                ><quill-js name=${this.name} disable-shadow></quill-js>
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
          const result = await Firebase.updateDocument(
            `/pages/${this.id}`,
            data
          );
          if (result) console.log("success");
        }
      }).render()}
    `;
  }

  @property({ type: String }) data;

  async beforeRender() {
    this.data = await Firebase.getDocument(`pages/${this.id}`);
  }

  firstUpdated() {
    const quillElement: any = this.shadowRoot.querySelector("quill-js");
    quillElement.updateComplete.then(() => {
      quillElement.quill.root.innerHTML = this.data.body;
    });
  }
}
