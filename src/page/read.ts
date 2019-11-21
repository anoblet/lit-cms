import "@anoblet/quill-js";

import { LitElement, css, customElement, html, property } from "lit-element";
import { getCollection, getDocument } from "@anoblet/firebase";

import { BeforeRenderMixin } from "@anoblet/mixins";
import { unsafeHTML } from "lit-html/directives/unsafe-html";

const getPageBySlug = async (slug: string) => {
  const result = await getCollection("pages", {
    where: {
      property: "slug",
      operator: "==",
      value: slug
    }
  });
  return result[0];
};

@customElement("page-read")
class PageReadComponent extends BeforeRenderMixin(LitElement) {
  @property({ type: String }) id: string;
  @property({ type: String }) slug: string;
  @property({ type: String }) data: any;

  async beforeRender() {
    if (this.id)
      getDocument(`pages/${this.id}`, {
        callback: document => (this.data = document)
      });
    else {
      const page = await getPageBySlug(this.slug);
      getDocument(`pages/${page.id}`, {
        callback: document => (this.data = document)
      });
    }
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
