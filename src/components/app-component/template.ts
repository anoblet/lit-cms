import "@anoblet/drawer-component";
import "@anoblet/card-component";
import "@anoblet/button-component";
import "@anoblet/toast-component";
import "@material/mwc-linear-progress";

import drawer from "../../templates/drawer";
import { html } from "lit-element";
import { menu } from "@anoblet/material-icons";

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
      <mwc-linear-progress></mwc-linear-progress>
      <drawer-component id="drawer-component" ?absolute=${this.mobile}
        ><div slot="aside">
          ${drawer.bind(this)()}
        </div>
        <div slot="main">
          <div id="outlet"></div></div
      ></drawer-component>
      <toast-component></toast-component>
    </div>
    <div id="footer"></div>
  `;
}
