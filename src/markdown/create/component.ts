import { LitElement, customElement, property, query } from "lit-element";

import { BeforeRenderMixin } from "@anoblet/mixins";
import MDCTabBarFoundation from "@material/tab-bar/foundation";
import { addDocument } from "@anoblet/firebase";
import globalStyle from "../../styles/global";
import page from "page";
import template from "./template";
import { stringToSlug } from "@anoblet/string-to-slug";
import style from "./style";
import { Page } from "../../page/types";

@customElement("markdown-create")
class MarkdownCreateComponent extends BeforeRenderMixin(LitElement) {
  static styles = [globalStyle, style];
  public render = template.bind(this);

  @property() activeTab: number;
  @property() data: Page[];

  @query("[name='title']") pageTitle: HTMLInputElement;
  @query("[name='slug']") slug: HTMLInputElement;
  @query("mwc-tab-bar") tabBar: any;

  firstUpdated() {
    this.tabBar.addEventListener(
      MDCTabBarFoundation.strings.TAB_ACTIVATED_EVENT,
      (event: CustomEvent) => {
        this.activeTab = event.detail.index;
      }
    );
  }

  updated(changedProperties: any) {
    if (changedProperties.has("activeTab") && this.activeTab === 0)
      this.pageTitle.addEventListener("input", this.titleToSlug.bind(this));
  }

  protected titleToSlug(e) {
    this.slug.value = stringToSlug(e.target.value);
  }

  getFormData() {
    const data = {};
    const formData = [...new FormData(this.shadowRoot.querySelector("form"))];
    formData.map(([key, value]) => {
      data[key] = value;
    });
    return data;
  }

  async onSubmit() {
    const appComponent: any = document.querySelector("app-component");
    const result = await addDocument("/pages", this.getFormData());
    appComponent.toast.content = result
      ? "Document added successfully"
      : "Error adding document";
    appComponent.toast.show();
    result ? page(`/page/read/${result}`) : false;
  }
}
