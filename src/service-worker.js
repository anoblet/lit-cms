import { clientsClaim, skipWaiting } from "workbox-core";
import { createHandlerBoundToURL, precacheAndRoute } from "workbox-precaching";
import { NavigationRoute, registerRoute } from "workbox-routing";
import { StaleWhileRevalidate } from "workbox-strategies/StaleWhileRevalidate";

skipWaiting();
clientsClaim();

precacheAndRoute(self.__WB_MANIFEST);

const handler = createHandlerBoundToURL("index.html");
const navigationRoute = new NavigationRoute(handler);
registerRoute(navigationRoute);

// registerRoute(
//   /\.js$/,
//   new StaleWhileRevalidate({
//     cacheName: "js-cache"
//   })
// );
