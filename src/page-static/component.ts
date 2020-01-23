import { customElement, LitElement } from "lit-element";
import globalStyle from "../styles/global.css";
import style from "./style.css";
import template from "./template";

@customElement("page-static")
export class PageStaticComponent extends LitElement {
  public static styles = [globalStyle, style];
  public render = template.bind(this);
}
