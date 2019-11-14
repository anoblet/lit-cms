import { html } from "lit-element";

export const routes = [
  {
    name: "Home",
    path: "/",
    template: html`
      <page-component page="home"></page-component>
    `
  },
  {
    name: "Design",
    path: "/design",
    template: html`
      <page-component page="design"></page-component>
    `
  }
];
