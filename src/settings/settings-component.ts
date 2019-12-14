import { css, customElement, html } from "lit-element";
import { MobxLitElement } from "@adobe/lit-mobx";
import { settings } from "./settings";
import { getDocument, updateDocument } from "@anoblet/firebase";
import { BeforeRenderMixin } from "@anoblet/mixins";

@customElement("settings-component")
class SettingsComponent extends MobxLitElement {
  private settings = settings;

  selectEditor(event: any) {
    this.settings.setEditor(event.target.value);
    updateDocument("/settings/default", {
      editor: event.target.value
    });
  }

  toggleShowEditLink(e) {
    this.settings.setShowEditLink(!this.settings.showEditLink);
    updateDocument("/settings/default", {
      showEditLink: e.target.checked
    });
  }

  toggleShowPageTitle(e) {
    this.settings.setShowPageTitle(!this.settings.showPageTitle);
    updateDocument("/settings/default", {
      showPageTitle: e.target.checked
    });
  }

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
        <summary>Application</summary>
        <div class="grid">
          <div class="row">
            <span>Editor</span>
            <span class="padding">
              <select @change=${this.selectEditor}
                ><option
                  value="quill"
                  ?selected=${this.settings.editor === "quill"}
                  >Quill</option
                ><option
                  value="markdown"
                  ?selected=${this.settings.editor === "markdown"}
                  >Markdown</option
                ></select
              ></span
            >
          </div>
        </div>
        <details open>
          <summary>Page</summary>
          <div id="settings" class="grid">
            <div class="row">
              <span class="padding">
                <input
                  type="checkbox"
                  ?checked=${this.settings.showPageTitle}
                  @click=${this.toggleShowPageTitle}/></span
              ><span>Show page title</span>
            </div>
            <div class="row">
              <span class="padding">
                <input
                  type="checkbox"
                  ?checked=${this.settings.showEditLink}
                  @click=${this.toggleShowEditLink}/></span
              ><span>Show edit link</span>
            </div>
          </div>
        </details>
      </details>
    `;
  }
}
