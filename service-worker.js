import { clientsClaim, skipWaiting } from "workbox-core";
import { createHandlerBoundToURL, precacheAndRoute } from "workbox-precaching";
import { NavigationRoute, registerRoute } from "workbox-routing";
import { StaleWhileRevalidate } from "workbox-strategies/StaleWhileRevalidate";

skipWaiting();
clientsClaim();

precacheAndRoute([{"revision":"baac0a1a5c45440dd3b40936550d0d01","url":"assets/icon-192x192.png"},{"revision":"baac0a1a5c45440dd3b40936550d0d01","url":"assets/icon-512x512.png"},{"revision":"15a84ead0eb504cff72c917afe10612d","url":"index.html"},{"revision":"79768ded6fbf22005ba0054a6f950ebb","url":"js/class-map-a135a0c3.js"},{"revision":"348a8bb66161a5801c2a44816f5da2a4","url":"js/component-2bbc35fc.js"},{"revision":"7f74bf076bf4ab805132a1cbff926ddc","url":"js/component-2fa1a223.js"},{"revision":"078a48e7265b6ccfcd7d5e2409ebce4b","url":"js/component-3e1f71bd.js"},{"revision":"5a4cdaf9068d48c063abe944fbd26647","url":"js/component-850f3c73.js"},{"revision":"03e0c7cdf17f52bdc3328728e98b44f6","url":"js/component-da67962b.js"},{"revision":"8e3298ebfc2fae8b8974a8c913065a08","url":"js/global.css-7de5bf1b.js"},{"revision":"2a3ece20fb2bb407e58383be14ea8bf8","url":"js/index-3481aa8e.js"},{"revision":"2e7f87dc3205fc0796ed7b00773eed95","url":"js/index-571c504f.js"},{"revision":"e321a0c6c6eec3445a07e5314a1fdb25","url":"js/index-58b01aca.js"},{"revision":"c2b89c0b8aa97f5f494652ebfaddaffa","url":"js/index-d1a3e3a7.js"},{"revision":"06e18cf46a7baef101f954b17b10c77a","url":"js/index.esm-7eb7b26c.js"},{"revision":"79f126151cf10c19e469f7e66090db13","url":"js/index.esm-fc25e5f1.js"},{"revision":"357463f2984512c1f8f3247382a92eb4","url":"js/index.js"},{"revision":"f8a8d51df9fce979dc4868150e4e2758","url":"js/list-96276bbc.js"},{"revision":"a49cb8a2a822b491ee23aca67d2415e3","url":"js/lit-element-8579d21b.js"},{"revision":"c5a1d9b0f01e4142699dd2c38d9de182","url":"js/mwc-button-40a27cf4.js"},{"revision":"1e15778c883a09c9680b69558975af1e","url":"js/mwc-linear-progress-18d87ae5.js"},{"revision":"71031d5b5b08b4ac2f3af127f4fa5085","url":"js/mwc-snackbar-7f01a97c.js"},{"revision":"eed11677b07c730d17dc7cbf8bbf110f","url":"js/mwc-textfield-e63948b5.js"},{"revision":"c0759bce56d48340d3f3d95bae992c5e","url":"js/page-df6660f4.js"},{"revision":"b5656a9d8d9ca26ebe0c70cb040b78df","url":"js/settings-599ecc45.js"},{"revision":"e64dfb176363988ea374c789a3adf7fd","url":"js/settings-component-1798aed7.js"},{"revision":"522e6be17dfffeb32567b5de95964b19","url":"js/tslib.es6-236f9aed.js"},{"revision":"7f6702a6b2c636c150bc7c16bb545730","url":"js/workbox-window.prod.es5-e4e3663e.js"},{"revision":"fde78b2b16cd6f2db02c452924dfca4c","url":"service-worker.js"}]);

// registerRoute(
//   /\.js$/,
//   new StaleWhileRevalidate({
//     cacheName: "js-cache"
//   })
// );

const handler = createHandlerBoundToURL("index.html");
const navigationRoute = new NavigationRoute(handler);
registerRoute(navigationRoute);
