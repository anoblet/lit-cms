import { html } from "lit-element";

export default function() {
  return html`
    <div id="drawer">
      <div class="flex">
        <details>
          <summary>Pages</summary>
          <ul>
            ${this.pages
              ? this.pages.map(
                  (page) =>
                    html`
                      <li><a href="/${page.slug}">${page.title}</a></li>
                    `
                )
              : ""}
          </ul>
        </details>
        <details>
          <summary>Manage</summary>
          <ul>
            <li><a href="/page/list">Admin</a></li>
          </ul>
        </details>
      </div>
      <ul id="bottom">
        <li><a href="/settings">Settings</a></li>
      </ul>
    </div>
  `;
}
