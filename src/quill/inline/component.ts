import { customElement, html, property } from "lit-element";

import { MobxLitElement } from "@adobe/lit-mobx";
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
  @property({ type: Boolean }) public editable: boolean;
  
  static styles = [style];
  render = template.bind(this);

  private settings = settings;

  editPage(event) {
    event.preventDefault();
    this.editable = true;
  }

  renderProperty(property: any) {
    if(!this.editable) return property;
    const type = typeof property;
    switch (type) {
      case "string": {
        return html`
          <input type="text" value=${property} />
        `;
      }
    }
  };
}
