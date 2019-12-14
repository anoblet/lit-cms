import { LitElement, css, customElement, html, property } from "lit-element";

import { MobxLitElement } from "@adobe/lit-mobx";
import { Page } from "../../page/types";
import { settings } from "../../settings/settings";
import style from "./style";
import template from "./template";

@customElement("markdown-view")
class MarkdownViewComponent extends MobxLitElement {
  @property() public page: Page;
  private settings = settings;

  static styles = [style];
  render = template.bind(this);
}
