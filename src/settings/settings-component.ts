import { css, customElement, html } from "lit-element";
import { MobxLitElement } from "@adobe/lit-mobx";
import { settings } from "./settings";

@customElement("settings-component")
export class SettingsComponent extends MobxLitElement {
  private settings = settings;

  public static styles = css`
    #settings {
      padding: 1rem;
    }

    .grid {
      display: grid;
      grid-gap: 1em;
    }

    .row {
      display: grid;
      grid-template-columns: max-content auto max-content;
    }

    .padding {
      padding: 0 0.75rem;
    }
  `;
  public render() {
    return html`
      <h1>
        Settings
      </h1>
      <details open>
        <summary>Page</summary>
        <div id="settings" class="grid">
          <div class="row">
            <span class="padding">
              <input
                type="checkbox"
                ?checked=${this.settings.showPageTitle}
                @click=${() => this.settings.toggleShowPageTitle()}/></span
            ><span>Show page title</span>
          </div>
          <div class="row">
            <span class="padding">
              <input
                type="checkbox"
                ?checked=${this.settings.showEditLink}
                @click=${() => this.settings.toggleShowEditLink()}/></span
            ><span>Show edit link</span>
          </div>
        </div>
      </details>
    `;
  }
}
