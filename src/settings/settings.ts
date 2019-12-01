import { observable, action } from "mobx";

class Settings {
  @observable
  public showPageTitle = false;
  @observable
  public showEditLink = true;

  @action
  public toggleShowPageTitle() {
    this.showPageTitle = !this.showPageTitle;
  }

  @action
  public toggleShowEditLink() {
    this.showEditLink = !this.showEditLink;
  }
}

export const settings = new Settings();
