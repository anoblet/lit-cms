import "./components/app-component/component";
import "@anoblet/card-component";

import { Settings, settings } from "./settings/settings";

import { AppComponent } from "./components/app-component/component";
import config from "../etc/config";
import { getCollection, getDocument, initialize } from "@anoblet/firebase";
import page from "page";
import { render } from "lit-html";

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

  const createComponent = (tagName: string, properties = {}) => {
    const element = document.createElement(tagName);
    Object.keys(properties).map((key) => (element[key] = properties[key]));
    return element;
  };

  const changeRoute = async (
    path: string,
    component: any,
    options: { shouldCache?: boolean; src?: any } = { shouldCache: true }
  ) => {
    let component_;
    if (options.src) await options.src();
    if (options.shouldCache && cache[path]) component_ = cache[path];
    else {
      component = component();
      if (!options.shouldCache || !cache[path]) {
        app.progress.open();
        const oldFirstUpdated = component.firstUpdated;
        component.firstUpdated = () => {
          oldFirstUpdated.bind(component)();
          app.progress.close();
        };
      }
    }
    if (options.shouldCache && !cache[path]) cache[path] = component;
    render(options.shouldCache ? cache[path] : component, app.outlet);
  };

  const getPageBySlug = async (slug: string) => {
    const result = await getCollection("pages", {
      where: {
        property: "slug",
        operator: "==",
        value: slug
      }
    });
    return result[0];
  };

  const _installRoutes = () => {
    page("/", async (context) => {
      const page = await getPageBySlug("home");
      changeRoute(
        context.path,
        () => createComponent("page-read", { data: page }),
        {
          src: () => import("./markdown/read")
        }
      );
    });
    page("/page/create", async (context) => {
      switch (settings.editor) {
        case "quill":
          changeRoute(context.path, () => createComponent("quill-edit"), {
            shouldCache: false,
            src: () => import("./quill/edit/component")
          });
          break;
        case "markdown":
          changeRoute(context.path, () => createComponent("markdown-create"), {
            shouldCache: false,
            src: () => import("./markdown/create/component")
          });
          break;
      }
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
      const page = await getDocument(`pages/${context.params.id}`);
      switch (settings.editor) {
        case "quill":
          changeRoute(
            context.path,
            () =>
              createComponent("quill-edit", {
                data: page
              }),
            { shouldCache: false, src: () => import("./quill/edit/component") }
          );
          break;
        case "markdown":
          changeRoute(
            context.path,
            () =>
              createComponent("markdown-edit", {
                data: page
              }),
            {
              shouldCache: false,
              src: () => import("./markdown/edit/component")
            }
          );
          break;
      }
    });
    page("/settings", async (context) => {
      changeRoute(context.path, () => createComponent("settings-component"), {
        shouldCache: true,
        src: () => import("./settings/settings-component")
      });
    });
    page("/:slug", async (context) => {
      const page = await getPageBySlug(context.params.slug);
      changeRoute(
        context.path,
        () => createComponent("quill-view", { data: page }),
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
