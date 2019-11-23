import "./page/create";
import "./page/list";
import "./page/read";
import "./page/edit";

import { AppComponent } from "./components/app-component/component";
import config from "../etc/config";
import { initialize } from "@anoblet/firebase";
import page from "page";

// Make async so we can control the timing
(async () => {
  initialize(config.firebase);
  await import("./components/app-component/component");

  const app: AppComponent = document.querySelector("app-component");
  await app.updateComplete;

  const cache = {};

  const createComponent = (tag, properties = {}) => {
    const element = document.createElement(tag);
    Object.keys(properties).map(key => (element[key] = properties[key]));
    return element;
  };

  const changeRoute = async (path: string, component: any) => {
    const shouldCache = false;
    if (!shouldCache || !cache[path]) {
      app.progress.open();
      const oldFirstUpdated = component.firstUpdated;
      component.firstUpdated = () => {
        oldFirstUpdated.bind(component)();
        app.progress.close();
      };
    }
    if (shouldCache && !cache[path]) cache[path] = component;
    app.outlet = shouldCache ? cache[path] : component;
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
    page("/page/read/:id", context => {
      changeRoute(
        context.path,
        createComponent("page-read", {
          id: context.params.id
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
    page("/:slug", context => {
      changeRoute(
        context.path,
        createComponent("page-read", {
          slug: context.params.slug
        })
      );
    });
    page();
  };

  _installRoutes();
})();

export {};
