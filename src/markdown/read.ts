import { LitElement, css, customElement, html, property } from "lit-element";
import { getDocument } from "@anoblet/firebase";

import { BeforeRenderMixin } from "@anoblet/mixins";
import { MobxReactionUpdate } from "@adobe/lit-mobx";
import marked from "marked";
import { settings } from "../settings/settings";
import { unsafeHTML } from "lit-html/directives/unsafe-html";

@customElement("page-read")
class PageReadComponent extends BeforeRenderMixin(
  MobxReactionUpdate(LitElement)
) {
  @property({ type: String }) id: string;
  @property({ type: String }) data: any;

  public settings = settings;

  async beforeRender() {
    await new Promise(async resolve => {
      getDocument(`pages/${this.id}`, {
        callback: document => {
          this.data = document;
          resolve();
        }
      });
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
        ${this.settings.showEditLink
          ? html`
              <a href="/page/edit/${this.data.id}">Edit</a>
            `
          : ""}
      </div>
      ${unsafeHTML(marked(this.data.body))}
    `;
  }
}
