import { observable, action } from "mobx";

class Application {
  @observable
  public firebaseInitialized = false;
  @observable
  public firestoreInitialized = false;
  @action
  public toggleFirebaseInitialized() {
    this.firebaseInitialized = !this.firebaseInitialized;
  }
  @action
  public toggleFirestoreInitialized() {
    this.firestoreInitialized = !this.firestoreInitialized;
  }
}

export const application = new Application();
