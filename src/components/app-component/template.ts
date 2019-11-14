import "@anoblet/drawer-component";
import "@anoblet/card-component";
import "@anoblet/button-component";

import drawer from "../../templates/drawer";
import { html } from "lit-element";
import { menu } from "@anoblet/material-icons";

export default function() {
  return html`
    <div id="header">
      <div id="menu" @click=${this._handleDrawerToggle}>
        <button-component id="button">${menu}</button-component>
      </div>
      <div id="title"><a href="/">lit-cms</a></div>
    </div>
    <div id="center">
      <drawer-component
        ><div slot="aside">
          ${drawer()}
        </div>
        <div slot="main">
          <div id="main"></div></div
      ></drawer-component>
    </div>
    <div id="footer"></div>
  `;
}
