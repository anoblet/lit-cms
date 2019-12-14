export const routes = {
  "/": {
    component: () => createComponent("page-read"),
    src: () => import("./markdown/read")
  }
};
