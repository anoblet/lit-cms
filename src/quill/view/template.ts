import { html } from "lit-element";
import { nothing } from "lit-html";
import { unsafeHTML } from "lit-html/directives/unsafe-html";

export default function() {
  return html`
    ${this.settings.showPageTitle
      ? html`
          <span id="title">${this.page.title}</span>
        `
      : nothing}
    <div id="editLink">
      ${this.settings.showEditLink
        ? html`
            <a href="/page/edit/${this.page.id}">Edit</a>
          `
        : nothing}
    </div>
    <div id="body">${unsafeHTML(this.page.body)}</div>
  `;
}
