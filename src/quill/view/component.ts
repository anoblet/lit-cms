import { MobxLitElement } from "@adobe/lit-mobx";
import { BeforeRenderMixin } from "@anoblet/mixins";
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
};

@customElement("quill-view")
class QuillViewComponent extends BeforeRenderMixin(MobxLitElement) {
  static styles = [style];
  render = template.bind(this);

  @property({ type: Object }) public data: Page;
  @property({ type: Object }) public dataPromise;

  private settings = settings;

  async beforeRender() {
    this.data = await this.dataPromise;
  }

  editPage(event) {
    event.preventDefault();
  }
}
