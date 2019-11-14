import "./page/create";
import "./page/list";
import "./page/read";
import "./page/edit";

import { TemplateResult, html, render } from "lit-html";

import home from "./pages/home";
import page from "page";

// Make async so we can control the timing
(async () => {
  await import("./components/app-component/component");

  const app: any = document.querySelector("app-component");
  await app.updateComplete;

  const outlet: HTMLElement = app.shadowRoot.querySelector("#outlet");

  const changeRoute = (template: TemplateResult) => {
    render(template, outlet);
  };

  const _installRoutes = () => {
    page("/", () => changeRoute(home));
    page("/page/create", () =>
      changeRoute(
        html`
          <page-create></page-create>
        `
      )
    );
    page("/page/list", () =>
      changeRoute(
        html`
          <page-list></page-list>
        `
      )
    );
    page("/page/read/:id", context => {
      changeRoute(
        html`
          <page-read id=${context.params.id}></page-read>
        `
      );
    });
    page("/page/edit/:id", context => {
      changeRoute(
        html`
          <page-edit id=${context.params.id}></page-edit>
        `
      );
    });
    page();
  };

  _installRoutes();
})();

export {};
