import { addDocument, updateDocument } from "@anoblet/firebase";
import { BeforeRenderMixin } from "@anoblet/mixins";
import { stringToSlug } from "@anoblet/string-to-slug";
import { customElement, LitElement, property, query } from "lit-element";
import page from "page";
import { Page } from "../../page/page";
import globalStyle from "../../styles/global.css";
import style from "./style";
import template from "./template";

@customElement("quill-edit")
export class QuillEdit extends BeforeRenderMixin(LitElement) {
  static styles = [globalStyle, style];
  render = template.bind(this);

  @property({ type: Object }) data = new Page();
  @property({ type: Object }) dataPromise;

  @query("[name='slug']") slug: HTMLInputElement;
  @query("[name='title']") pageTitle: HTMLInputElement;

  async beforeRender() {
    await import("@anoblet/quill-js");
    this.dataPromise && (this.data = await this.dataPromise);
  }

  firstUpdated() {
    this.pageTitle.addEventListener("input", this.titleToSlug.bind(this));
  }

  protected titleToSlug(event: any) {
    this.data.slug = stringToSlug(event.target.value);
    this.requestUpdate();
  }

  async onSubmit(event: Event) {
    event.preventDefault();
    const result = this.data.id
      ? await updateDocument(`pages/${this.data.id}`, this.data)
      : await addDocument("/pages", { ...this.data });
    const appComponent: any = document.querySelector("app-component");
    if (result) {
      appComponent.toast.content = this.data.id
        ? "Document edited successfully"
        : "Document added successfully";
      appComponent.toast.show();
      page(`/page/read/${this.data.id ? this.data.id : result}`);
    } else {
      appComponent.toast.content = "Error adding document";
      appComponent.toast.show();
    }
  }

  handleUpdate(event: any) {
    this.data[event.target.getAttribute("name")] = event.target.value;
  }
}
