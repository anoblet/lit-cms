import { LitElement, css, customElement, html, property } from "lit-element";
import { deleteDocument, getCollection } from "@anoblet/firebase";

import { BeforeRenderMixin } from "@anoblet/mixins";
import page from "page";

@customElement("page-list")
class PageListComponent extends BeforeRenderMixin(LitElement) {
  @property() data;

  async beforeRender() {
    await getCollection("pages", {
      callback: collection => (this.data = collection),
      orderBy: "sortOrder"
    });
  }
  create() {
    page("/page/create");
  }

  delete(event: any) {
    event.preventDefault();
    const result = confirm("Are you sure?");
    if (result) deleteDocument(`pages/${event.composedPath()[0].dataset.id}`);
  }

  static styles = css`
    :host {
      display: grid;
      grid-gap: 2rem;
      box-sizing: border-box;
    }

    #table {
      display: grid;
      grid-gap: 1rem;
    }

    .row {
      display: grid;
      grid-template-columns: max-content auto max-content;
      grid-gap: 1rem;
    }

    button-component {
      border: 1px solid #000;
      padding: 0.5rem;
      width: max-content;
    }
  `;

  render() {
    return html`
      <div id="actions">
        <button-component @click=${this.create}>Create</button-component>
      </div>
      <div id="table">
        <div class="row">
          <span>#</span>
          <span>Title</span>
          <span>Actions</span>
        </div>
        ${this.data.map(
          (page, index) => html`
            <div class="row">
              <span> ${index}</span><span>${page.title}</span
              ><span
                ><a href="/${page.slug}">View</a>
                <a href="/page/edit/${page.id}">Edit</a>
                <a href="" data-id=${page.id} @click=${this.delete}
                  >Delete</a
                ></span
              >
            </div>
          `
        )}
      </div>
    `;
  }
}
