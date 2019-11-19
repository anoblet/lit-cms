import "@anoblet/quill-js";

import { LitElement, css, customElement, html, property } from "lit-element";

import { BeforeRenderMixin } from "@anoblet/mixins";
import { getPage } from "../pages";
import { unsafeHTML } from "lit-html/directives/unsafe-html";
import Firebase from "../firebase";
// import { QuillDeltaToHtmlConverter } from "quill-delta-to-html/dist/esm/QuillDeltaToHtmlConverter";

@customElement("page-read")
class PageReadComponent extends BeforeRenderMixin(LitElement) {
  @property({ type: String }) slug: string;
  @property({ type: String }) data;

  async beforeRender() {
    const page = await getPage(this.slug);
    Firebase.getDocument(`pages/${page.id}`, {
      callback: document => {
        this.data = document;
      }
    });
  }

  static styles = css`
    #header {
      display: grid;
      grid-template-columns: auto max-content;
    }
  `;

  render() {
    // const converter = new QuillDeltaToHtmlConverter(this.data.body, {});
    return html`
      ${this.data
        ? html`
            <div id="header">
              <div id="title">${this.data.title}</div>
              <div id="actions">
                <a href="/page/edit/${this.data.id}">Edit</a>
              </div>
            </div>
            ${unsafeHTML(this.data.body)}
          `
        : ""}
    `;
  }
}
