import { deleteDocument, getCollection, getDocument } from "@anoblet/firebase";
import { BeforeRenderMixin } from "@anoblet/mixins";
import { css, customElement, html, LitElement, property } from "lit-element";
import page from "page";

@customElement("page-list")
class PageListComponent extends BeforeRenderMixin(LitElement) {
  @property() data;
  @property() sortedData;
  @property() __properties;

  async beforeRender() {
    await getCollection("pages", {
      callback: (collection) => (this.data = collection)
    });
    this.__properties = (await getDocument(`pages/__properties`)) || {
      sortOrder: []
    };
  }

  create() {
    page("/page/create");
  }

  delete(event: any) {
    event.preventDefault();
    const result = confirm("Are you sure?");
    if (result) deleteDocument(`pages/${event.composedPath()[0].dataset.id}`);
  }

  sort() {
    const sortedData = [];
    const getId = (item) => this.data.find;
    this.__properties.sortOrder.map((item) => {
      sortedData.push(this.data.find(({ id }) => id === item));
    });
  }

  sortIncrease(event) {
    const sortOrder = this.__properties.sortOrder;
    const id = event.target.dataset.id;
    let index = sortOrder.indexOf(id);
    if (index === -1) {
      sortOrder.push(id);
      index = sortOrder.length - 1;
    }
    if (sortOrder[index - 1])
      [sortOrder[index - 1], sortOrder[index]] = [
        sortOrder[index],
        sortOrder[index - 1]
      ];
  }

  sortDecrease() {}

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

    .actions {
      display: flex;
    }

    .actions > * {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .row {
      display: grid;
      grid-template-columns: max-content auto max-content;
      grid-gap: 1rem;
    }

    .sort {
      display: grid;
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
        ${this.sortedData.map(
          (page, index) => html`
            <div class="row">
              <span> ${index}</span><span>${page.title}</span>
              <div class="actions">
                <a href="/${page.slug}">View</a>
                <a href="/page/edit/${page.id}">Edit</a>
                <a href="" data-id=${page.id} @click=${this.delete}>Delete</a>
                <div class="sort">
                  <span
                    data-id=${page.id}
                    data-index=${index}
                    @click=${this.sortIncrease}
                    >up</span
                  ><span
                    data-id=${page.id}
                    data-index=${index}
                    @click=${this.sortDecrease}
                    >down</span
                  >
                </div>
              </div>
            </div>
          `
        )}
      </div>
    `;
  }
}
