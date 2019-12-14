import { html } from "lit-element";
import marked from "marked";
import { nothing } from "lit-html";
import { unsafeHTML } from "lit-html/directives/unsafe-html";

import("../../page/view");

export default function() {
  return html`
    ${this.settings.showPageTitle
      ? html`
          <span id="title">${this.page.title}</span>
        `
      : nothing}
    <div id="body">${unsafeHTML(marked(this.page.body))}</div>
  `;
}
