import { LitElement, customElement, property, query } from "lit-element";

import { getCollection } from "@anoblet/firebase";
import globalStyle from "../../styles/global";
import style from "./style";
import template from "./template";

const getPages = async () => {
  return getCollection("pages");
};

@customElement("app-component")
export class AppComponent extends LitElement {
  @property() outlet;
  @property() pages;
  @query("mwc-linear-progress") progress;

  public static styles = [globalStyle, style];
  public render = template.bind(this);

  firstUpdated() {
    (async () => {
      this.pages = await getPages();
    })();
  }

  _handleDrawerToggle() {
    const drawer: any = this.shadowRoot.querySelector("drawer-component");
    drawer.opened = !drawer.opened;
  }
}
