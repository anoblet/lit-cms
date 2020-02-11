import { registerRoute } from "workbox-routing";
import { StaleWhileRevalidate } from "workbox-strategies/StaleWhileRevalidate";
import { precacheAndRoute } from "workbox-precaching";
import { skipWaiting, clientsClaim } from "workbox-core";

skipWaiting();
clientsClaim();

registerRoute(
  /\.js$/,
  new StaleWhileRevalidate({
    cacheName: "js-cache"
  })
);

precacheAndRoute(self.__WB_MANIFEST);
