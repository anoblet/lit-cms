import { MobxLitElement } from "@adobe/lit-mobx";
import { BeforeRenderMixin } from "@anoblet/mixins";
import { customElement, property } from "lit-element";
import { html, render } from "lit-html";
import { AppComponent } from "../../components/app-component/component";
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

  async editPage(event) {
    event.preventDefault();
    await import("../edit/component");
    const app: AppComponent = document.querySelector("app-component");
    render(
      html`
        <quill-edit .dataPromise=${this.dataPromise}></quill-edit>
      `,
      app.outlet
    );
    window.history.pushState(null, null, `/page/edit/${this.data.id}`);
  }
}
