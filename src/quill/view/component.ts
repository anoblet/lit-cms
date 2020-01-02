import { customElement, property } from "lit-element";

import { MobxLitElement } from "@adobe/lit-mobx";
import { Page } from "../../page/types";
import { settings } from "../../settings/settings";
import style from "./style";
import template from "./template";

@customElement("markdown-view")
class QuillViewComponent extends MobxLitElement {
  @property({ type: Object }) public page: Page;
  private settings = settings;

  static styles = [style];
  render = template.bind(this);

  shouldUpdate(_changedProperties): boolean {
    if (!this.page) return false;
    return super.shouldUpdate(_changedProperties);
  }
}
