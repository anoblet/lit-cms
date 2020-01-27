import "@anoblet/card-component";
import { getDocument, initialize } from "@anoblet/firebase";
import { render } from "lit-html";
import page from "page";
import config from "../etc/config";
import "./components/app-component/component";
import { AppComponent } from "./components/app-component/component";
import "./page-static/component";
import "./quill/view/component";
import { Settings, settings } from "./settings/settings";
import { createComponent, getPageBySlug } from "./utility";

const syncSettings = async () => {
  await new Promise((resolve) => {
    getDocument("settings/default", {
      callback: (document: Settings) => {
        settings.setEditor(document.editor);
        settings.setShowEditLink(document.showEditLink);
        settings.setShowPageTitle(document.showPageTitle);
        resolve();
      }
    });
  });
};

// Make async so we can control the timing
(async () => {
  await initialize(config.firebase);
  await syncSettings();

  const app: AppComponent = document.querySelector("app-component");
  await app.updateComplete;

  const cache = {};

  const changeRoute = async (
    path: string,
    componentFunction: any,
    { shouldCache = true, source }: { shouldCache?: boolean; source?: any }
  ) => {
    let component;
    app.progress.open();
    if (shouldCache && cache[path]) {
      component = cache[path];
    } else {
      source && (await source());
      component = componentFunction();
      component.beforeRender && (await component.beforeRender());
      shouldCache && (cache[path] = component);
    }
    render(component, app.outlet);
    app.progress.close();
  };

  const _installRoutes = () => {
    page("/", async (context) => {
      changeRoute(
        context.path,
        () =>
          createComponent("quill-view", {
            dataPromise: getPageBySlug("home")
          }),
        {
          source: () => import("./quill/view/component")
        }
      );
    });
    page("/page/create", async (context) => {
      changeRoute(context.path, () => createComponent("quill-edit"), {
        shouldCache: false,
        source: () => import("./quill/edit/component")
      });
    });
    page("/page/list", async (context) => {
      changeRoute(context.path, () => createComponent("page-list"), {
        source: () => import("./page/list")
      });
    });
    page("/page/read/:id", async (context) => {
      changeRoute(
        context.path,
        () =>
          createComponent("quill-view", {
            dataPromise: getDocument(`pages/${context.params.id}`)
          }),
        {
          source: () => import("./quill/view/component")
        }
      );
    });
    page("/page/edit/:id", async (context) => {
      changeRoute(
        context.path,
        () =>
          createComponent("quill-edit", {
            dataPromise: getDocument(`pages/${context.params.id}`)
          }),
        { shouldCache: false, source: () => import("./quill/edit/component") }
      );
    });
    page("/settings", async (context) => {
      changeRoute(context.path, () => createComponent("settings-component"), {
        source: () => import("./settings/settings-component")
      });
    });
    page("/:slug", async (context) => {
      changeRoute(
        context.path,
        () =>
          createComponent("quill-view", {
            dataPromise: getPageBySlug(context.params.slug)
          }),
        {
          source: () => import("./quill/view/component")
        }
      );
    });
    page();
  };

  _installRoutes();
})();

export {};
