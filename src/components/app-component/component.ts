import { LitElement, customElement, property, query } from "lit-element";

import { DrawerComponent } from "@anoblet/drawer-component";
import { LinearProgress } from "@material/mwc-linear-progress";
import { getCollection } from "@anoblet/firebase";
import globalStyle from "../../styles/global";
import { observe } from "@anoblet/match-media";
import style from "./style.css";
import template from "./template";

@customElement("app-component")
export class AppComponent extends LitElement {
  @property({ type: Boolean }) mobile: boolean;
  @property() outlet;
  @property() pages;

  @query("#drawer-component") drawer: DrawerComponent;
  @query("mwc-linear-progress") progress: LinearProgress;

  public static styles = [globalStyle, style];
  public render = template.bind(this);

  firstUpdated() {
    this.getPages();
    observe("(max-width: 700px)", result => (this.mobile = result));
  }

  async getPages() {
    return await getCollection("pages", {
      callback: collection => (this.pages = collection),
      orderBy: "sortOrder"
    });
  }

  _handleDrawerToggle() {
    this.drawer.opened = !this.drawer.opened;
  }
}
