import { html } from "lit-element";
// import { keyboard_arrow_right } from "@anoblet/material-icons";
export default function() {
  return html`
    <div id="drawer">
      <details>
        <summary>Pages</summary>
        <ul>
          ${this.pages
            ? this.pages.map(
                page => html`
                  <li><a href="/${page.slug}">${page.title}</a></li>
                `
              )
            : ""}
        </ul>
      </details>
      <details>
        <summary>Actions</summary>
        <ul>
          <li><a href="/page/create">Create</a></li>
          <li><a href="/page/list">List</a></li>
        </ul>
      </details>
    </div>
  `;
}
