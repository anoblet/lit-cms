importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/4.0.0/workbox-sw.js"
);

import { registerRoute } from "workbox-routing";

// workbox.setConfig({ debug: true });

workbox.core.skipWaiting();
workbox.core.clientsClaim();

registerRoute(
  /\.js$/,
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: "js-cache"
  })
);

workbox.precaching.precacheAndRoute(self.__WB_MANIFEST);
