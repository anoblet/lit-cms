import "@anoblet/quill-js";

import { LitElement, css, customElement, html, property } from "lit-element";
import { getCollection, getDocument } from "@anoblet/firebase";

import { BeforeRenderMixin } from "@anoblet/mixins";
import { unsafeHTML } from "lit-html/directives/unsafe-html";
import { MobxReactionUpdate } from "@adobe/lit-mobx";
import { settings } from "../settings/settings";

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
class PageReadComponent extends BeforeRenderMixin(
  MobxReactionUpdate(LitElement)
) {
  @property({ type: String }) id: string;
  @property({ type: String }) slug: string;
  @property({ type: String }) data: any;

  public settings = settings;

  async beforeRender() {
    await new Promise(async resolve => {
      if (this.id)
        getDocument(`pages/${this.id}`, {
          callback: document => {
            this.data = document;
            resolve();
          }
        });
      else {
        const page = await getPageBySlug(this.slug);
        getDocument(`pages/${page.id}`, {
          callback: document => {
            this.data = document;
            resolve();
          }
        });
      }
    });
  }

  static styles = css`
    :host {
      display: block;
      position: relative;
    }

    #actions {
      position: absolute;
      top: 0;
      right: 0;
    }
  `;

  render() {
    return html`
      ${this.settings.showPageTitle
        ? html`
            ${this.data.title}
          `
        : ""}

      <div id="actions">
        <a href="/page/edit/${this.data.id}">Edit</a>
      </div>
      ${unsafeHTML(this.data.body)}
    `;
  }
}
