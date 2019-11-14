import { LitElement, customElement } from "lit-element";

import style from "./style";
import globalStyle from "../../styles/global";
import template from "./template";

@customElement("app-component")
export class AppComponent extends LitElement {
  public static styles = [globalStyle, style];
  public render = template.bind(this);

  _handleDrawerToggle() {
    const drawer: any = this.shadowRoot.querySelector("drawer-component");
    drawer.opened = !drawer.opened;
  }
}
