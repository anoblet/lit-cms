import "@anoblet/drawer-component";
import { menu } from "@anoblet/material-icons";
import { html } from "lit-element";
import drawer from "../../templates/drawer";

import("@anoblet/button-component");
import("@anoblet/card-component");
import("@anoblet/toast-component");
import("@material/mwc-linear-progress");

export default function() {
  return html`
    <div id="header">
      <div id="menu">
        <button-component
          id="button"
          aria-label="menu"
          @click=${this._handleDrawerToggle}
          >${menu}</button-component
        >
      </div>
      <div id="title"><a href="/">lit-cms</a></div>
    </div>
    <div id="center">
      <drawer-component id="drawer-component" ?absolute=${this.mobile}
        ><div slot="aside">
          ${drawer.bind(this)()}
        </div>
        <div slot="main">
          <mwc-linear-progress></mwc-linear-progress>
          <div id="outlet"></div></div
      ></drawer-component>
      <toast-component></toast-component>
    </div>
  `;
}
