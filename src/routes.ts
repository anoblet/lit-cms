import { createComponent, getPageBySlug } from "./utility";

export const routes = {
  "/": {
    src: () => import("./markdown/read"),
    action: async () => {
      const data = await getPageBySlug("home");
      return createComponent("page-read", { data });
    }
  }
};
