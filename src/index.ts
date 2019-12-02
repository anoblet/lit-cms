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

  const createComponent = (tagName: string, properties = {}) => {
    const element = document.createElement(tagName);
    Object.keys(properties).map(key => (element[key] = properties[key]));
    return element;
  };

  const changeRoute = async (
    path: string,
    component: any,
    options: { shouldCache: boolean } = { shouldCache: true }
  ) => {
    if (!options.shouldCache || !cache[path]) {
      app.progress.open();
      const oldFirstUpdated = component.firstUpdated;
      component.firstUpdated = () => {
        oldFirstUpdated.bind(component)();
        app.progress.close();
      };
    }
    if (options.shouldCache && !cache[path]) cache[path] = component;
    app.outlet = options.shouldCache ? cache[path] : component;
  };

  const _installRoutes = () => {
    page("/", async () => {
      await import("./page/read");
      changeRoute(
        "/page/read/home",
        createComponent("page-read", {
          slug: "home"
        })
      );
    });
    page("/page/create", async context => {
      await import("./page/create");
      changeRoute(context.path, createComponent("page-create"), {
        shouldCache: false
      });
    });
    page("/page/list", async context => {
      await import("./page/list");
      changeRoute(context.path, createComponent("page-list"));
    });
    page("/page/read/:id", async context => {
      await import("./page/read");
      changeRoute(
        context.path,
        createComponent("page-read", {
          id: context.params.id
        })
      );
    });
    page("/page/edit/:id", async context => {
      await import("./page/edit");
      changeRoute(
        context.path,
        createComponent("page-edit", {
          id: context.params.id
        }),
        { shouldCache: false }
      );
    });
    page("/settings", async context => {
      await import("./settings/settings-component");
      changeRoute(context.path, createComponent("settings-component"), {
        shouldCache: true
      });
    });
    page("/:slug", async context => {
      await import("./page/read");
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
