import "@anoblet/quill-js";

import { LitElement, css, customElement, html, property } from "lit-element";

import { BeforeRenderMixin } from "@anoblet/mixins";
import Firebase from "../Firebase";
// import { QuillDeltaToHtmlConverter } from "quill-delta-to-html/dist/esm/QuillDeltaToHtmlConverter";
import { unsafeHTML } from "lit-html/directives/unsafe-html";

@customElement("page-read")
class PageRead extends BeforeRenderMixin(LitElement) {
  @property({ type: String }) id: string;
  @property({ type: String }) data;

  async beforeRender() {
    this.data = await Firebase.getDocument(`pages/${this.id}`);
  }

  static styles = css``;

  render() {
    // const converter = new QuillDeltaToHtmlConverter(this.data.body, {});
    return html`
      ${this.data.title} ${unsafeHTML(this.data.body)}
    `;
  }
}
