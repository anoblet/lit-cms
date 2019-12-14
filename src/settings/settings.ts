import { observable, action } from "mobx";

export class Settings {
  @observable
  public editor: string;
  @observable
  public showPageTitle = false;
  @observable
  public showEditLink = true;

  @action
  public setEditor(value: string) {
    this.editor = value;
  }

  @action
  public setShowPageTitle(value: boolean) {
    this.showPageTitle = value;
  }

  @action
  public setShowEditLink(value: boolean) {
    this.showEditLink = value;
  }
}

export const settings = new Settings();
