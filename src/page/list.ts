import { LitElement, css, customElement, html, property } from "lit-element";

import Firebase from "../Firebase";

@customElement("page-list")
export class PageList extends LitElement {
  static styles = css`
    .grid {
      display: grid;
      grid-gap: 1rem;
    }
  `;

  render() {
    return html`
      Pages:
      <div class="grid">
        ${this.data
          ? this.data.map(
              (page, index) => html`
                <span>
                  ${index}.  ${page.title} (<a href="/page/read/${page.id}">View</a>/<a href="/page/edit/${page.id}">Edit</a>)
                </span>
              `
            )
          : ""}
      </div>
    `;
  }

  @property() data;

  constructor() {
    super();
    this.beforeRenderComplete();
  }

  async beforeRenderComplete() {
    this.data = await Firebase.getCollection("/pages");
  }
}
