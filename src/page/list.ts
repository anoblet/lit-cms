import { LitElement, css, customElement, html, property } from "lit-element";

import { BeforeRenderMixin } from "@anoblet/mixins";
import { deleteDocument, getCollection } from "@anoblet/firebase";

@customElement("page-list")
class PageListComponent extends BeforeRenderMixin(LitElement) {
  @property() data;

  async beforeRender() {
    this.data = await getCollection(
      "/pages" /*, {
      callback: collection => (this.data = collection)
    }*/
    );
    console.log(this.data);
  }

  deleteDocument(id) {
    deleteDocument(`pages/${id}`);
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
              >/<a href="/page/edit/${page.id}">Edit</a>/<a
                href=""
                @click=${() => this.deleteDocument(page.id)}
                >Delete</a
              >)
            </span>
          `
        )}
      </div>
    `;
  }
}
