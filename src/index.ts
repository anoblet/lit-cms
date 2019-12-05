import { AppComponent } from "./components/app-component/component";
// import { initialize, loadModule } from "@anoblet/firebase";
import page from "page";

// Make async so we can control the timing
(async () => {
  // await loadModule("app");
  // await loadModule("firestore");
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
    options: { shouldCache?: boolean; src?: any } = { shouldCache: true }
  ) => {
    if (options.src) await options.src();
    if (typeof component == "function") component = component();
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

  const _changeRoute = ({
    path: String,
    component: Function,
    properties: {},
    options: { shouldCache, src }
  }) => {};

  const _installRoutes = () => {
    page("/", async () => {
      changeRoute(
        "/page/read/home",
        () =>
          createComponent("page-read", {
            slug: "home"
          }),
        {
          src: () => import("./page/read")
        }
      );
    });
    page("/page/create", async context => {
      changeRoute(context.path, createComponent("page-create"), {
        shouldCache: false,
        src: () => import("./page/create")
      });
    });
    page("/page/list", async context => {
      changeRoute(context.path, createComponent("page-list"), {
        src: () => import("./page/list")
      });
    });
    page("/page/read/:id", async context => {
      changeRoute(
        context.path,
        () =>
          createComponent("page-read", {
            id: context.params.id
          }),
        {
          src: () => import("./page/read")
        }
      );
    });
    page("/page/edit/:id", async context => {
      changeRoute(
        context.path,
        () =>
          createComponent("page-edit", {
            id: context.params.id
          }),
        { shouldCache: false, src: () => import("./page/edit") }
      );
    });
    page("/settings", async context => {
      changeRoute(context.path, () => createComponent("settings-component"), {
        shouldCache: true,
        src: () => import("./settings/settings-component")
      });
    });
    page("/:slug", async context => {
      changeRoute(
        context.path,
        () =>
          createComponent("page-read", {
            slug: context.params.slug
          }),
        {
          src: () => import("./page/read")
        }
      );
    });
    page();
  };

  _installRoutes();
})();

export {};
