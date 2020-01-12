import { MobxLitElement } from "@adobe/lit-mobx";
import { customElement, property } from "lit-element";
import { Page } from "../../page/types";
import { settings } from "../../settings/settings";
import style from "./style";
import template from "./template";

const propertyDescriptions = {
  title: {
    type: "string",
    label: "Title"
  }
}

@customElement("quill-view")
class QuillViewComponent extends MobxLitElement {
  @property({ type: Object }) public data: Page;
  
  static styles = [style];
  render = template.bind(this);

  private settings = settings;

  editPage(event) {
    event.preventDefault();
  }
}
