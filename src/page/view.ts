import { LitElement, css, customElement, html, property } from "lit-element";

import { Page } from "./types";
import { unsafeHTML } from "lit-html/directives/unsafe-html";

const style = css``;

const template = function() {
  return html`
    <span id="title">${this.page.title}</span>
    <div id="body">${unsafeHTML(this.page.body)}</div>
  `;
};

@customElement("page-view")
class PageViewComponent extends LitElement {
  @property() public page: Page;

  static styles = [style];
  render = template.bind(this);
}
