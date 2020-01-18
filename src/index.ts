import "./components/app-component/component";
import "@anoblet/card-component";

import { Settings, settings } from "./settings/settings";

import { AppComponent } from "./components/app-component/component";
import config from "../etc/config";
import { getDocument, initialize } from "@anoblet/firebase";
import page from "page";
import { render } from "lit-html";
import { createComponent, getPageBySlug } from "./utility";

// Make async so we can control the timing
(async () => {
  await initialize(config.firebase);
  await getDocument("settings/default", {
    callback: (document: Settings) => {
      settings.setEditor(document.editor);
      settings.setShowEditLink(document.showEditLink);
      settings.setShowPageTitle(document.showPageTitle);
    }
  });
  const app: AppComponent = document.querySelector("app-component");
  await app.updateComplete;

  const cache = {};

  const changeRoute = async (
    path: string,
    component: any,
    options: { shouldCache?: boolean; src?: any } = { shouldCache: true }
  ) => {
    let component_;
    app.progress.open();
    if (options.shouldCache && cache[path]) component_ = cache[path];
    else {
      if (options.src) await options.src();
      component_ = component();
    }
    component_.updateComplete.then(() => {
      if (options.shouldCache) cache[path] = component_;
      app.progress.close();
    });
    render(component_, app.outlet);
  };

  const _installRoutes = () => {
    page("/", async (context) => {
      changeRoute(
        context.path,
        () =>
          createComponent("quill-view", { dataPromise: getPageBySlug("home") }),
        {
          src: () => import("./quill/view/component")
        }
      );
    });
    page("/page/create", async (context) => {
      changeRoute(context.path, () => createComponent("quill-edit"), {
        shouldCache: false,
        src: () => import("./quill/edit/component")
      });
    });
    page("/page/list", async (context) => {
      changeRoute(context.path, () => createComponent("page-list"), {
        src: () => import("./page/list")
      });
    });
    page("/page/read/:id", async (context) => {
      const page = await getDocument(`pages/${context.params.id}`);
      changeRoute(
        context.path,
        () =>
          createComponent("page-read", {
            data: page
          }),
        {
          src: () => import("./markdown/read")
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
        { shouldCache: false, src: () => import("./quill/edit/component") }
      );
    });
    page("/settings", async (context) => {
      changeRoute(context.path, () => createComponent("settings-component"), {
        src: () => import("./settings/settings-component")
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
          src: () => import("./quill/view/component")
        }
      );
    });
    page();
  };

  _installRoutes();
})();

export {};
