import { html } from "lit-element";
import { menu } from "@anoblet/material-icons";
// import "@material/mwc-top-app-bar-fixed";
// import "@material/mwc-icon-button";

console.log(menu);

export default function() {
  return html`
    <mwc-top-app-bar-fixed centerTitle>
      <mwc-icon-button
        icon="menu"
        slot="navigationIcon"
        @click="${this._handleDrawerToggle}"
      ></mwc-icon-button>
      <div slot="title">Andrew Noblet</div>
      <div><!-- content --></div>
    </mwc-top-app-bar-fixed>
  `;
}
