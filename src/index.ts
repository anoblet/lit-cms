import "./page/create";
import "./page/list";
import "./page/read";
import "./page/edit";

import { TemplateResult, html, render } from "lit-html";

import page from "page";

// Make async so we can control the timing
(async () => {
  await import("./components/app-component/component");

  const app: any = document.querySelector("app-component");
  await app.updateComplete;

  const outlet: HTMLElement = app.shadowRoot.querySelector("#outlet");

  const cache = {};

  const createComponent = (tag, properties = {}) => {
    const element = document.createElement(tag);
    Object.keys(properties).map(key => (element[key] = properties[key]));
    return element;
  };

  const changeRoute = async (path, component) => {
    if (!cache[path]) {
      app.progress.open();
      const oldFirstUpdated = component.firstUpdated;
      component.firstUpdated = () => {
        oldFirstUpdated.bind(component)();
        app.progress.close();
      };
      cache[path] = component;
    }
    app.outlet = cache[path];
  };

  const _installRoutes = () => {
    page("/", () =>
      changeRoute(
        "/page/read/home",
        createComponent("page-read", {
          slug: "home"
        })
      )
    );
    page("/page/create", context =>
      changeRoute(context.path, createComponent("page-create"))
    );
    page("/page/list", context =>
      changeRoute(context.path, createComponent("page-list"))
    );
    page("/page/read/:slug", context => {
      changeRoute(
        context.path,
        createComponent("page-read", {
          slug: context.params.slug
        })
      );
    });
    page("/page/edit/:id", context =>
      changeRoute(
        context.path,
        createComponent("page-edit", {
          id: context.params.id
        })
      )
    );
    page();
  };

  _installRoutes();
})();

export {};
