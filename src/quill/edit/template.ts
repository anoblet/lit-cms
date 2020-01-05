import "@material/mwc-tab-bar";
import "@material/mwc-tab";
import "@material/mwc-textfield";

import { html } from "lit-element";
import { nothing } from "lit-html";

export default function() {
  return html`
    <form>
      <mwc-textfield
        name="title"
        label="Title"
        outlined
        @change=${this.handleUpdate}
        value=${this.data.title}
      >
      </mwc-textfield>
      <mwc-textfield
        name="slug"
        label="Slug"
        outlined
        disabled
        @change=${this.handleUpdate}
        value=${this.data.slug}
      >
      </mwc-textfield>
      ${!this.data.id || !this.data.editor
        ? html`
            <fieldset>
              <legend>Editor</legend>
              <select name="editor" @change=${this.handleUpdate}>
                <option value="quill">Quill</option>
                <option value="markdown">Markdown</option>
              </select>
            </fieldset>
          `
        : nothing}
      <mwc-textfield
        name="sortOrder"
        label="Sort order"
        outlined
        type="number"
        @change=${this.handleUpdate}
        value=${this.data.sortOrder}
      ></mwc-textfield>
      ${this.data.editor === "quill"
        ? html`
            <quill-js
              format="html"
              name="body"
              .value=${this.data.body}
              @blur=${this.handleUpdate}
            ></quill-js>
          `
        : nothing}
      <button @click=${this.onSubmit}>
        Save
      </button>
    </form>
  `;
}