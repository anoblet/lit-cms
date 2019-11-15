import { html } from "lit-element";
// import { keyboard_arrow_right } from "@anoblet/material-icons";

export default function() {
  return html`
    <div id="drawer">
      <details>
        <summary>Page</summary>
        <ul>
          <li><a href="/page/list">List</a></li>
          <li><a href="/page/create">Create</a></li>
        </ul>
      </details>
    </div>
  `;
}
