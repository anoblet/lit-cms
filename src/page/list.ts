import { LitElement, css, customElement, html, property } from "lit-element";

import { BeforeRenderMixin } from "@anoblet/mixins";
import Firebase from "../Firebase";

@customElement("page-list")
class PageListComponent extends BeforeRenderMixin(LitElement) {
  @property() data;

  async beforeRender() {
    this.data = await Firebase.getCollection("/pages");
  }

  static styles = css`
    :host,
    .grid {
      display: grid;
      grid-gap: 1rem;
    }
  `;

  render() {
    return html`
      Pages:
      <div class="grid">
        ${this.data.map(
          (page, index) => html`
            <span>
              ${index}. ${page.title} (<a href="/page/read/${page.slug}">View</a
              >/<a href="/page/edit/${page.id}">Edit</a>)
            </span>
          `
        )}
      </div>
    `;
  }
}
