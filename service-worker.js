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

precacheAndRoute([{"revision":"baac0a1a5c45440dd3b40936550d0d01","url":"assets/icon-192x192.png"},{"revision":"baac0a1a5c45440dd3b40936550d0d01","url":"assets/icon-512x512.png"},{"revision":"15a84ead0eb504cff72c917afe10612d","url":"index.html"},{"revision":"4511e1cbca686684f730e980fec68ced","url":"js/class-map-a135a0c3.js"},{"revision":"947e195b0852958f99c7cadeff3b808f","url":"js/component-0f5d4a6f.js"},{"revision":"9c2162940815921ece37b1afdd05d511","url":"js/component-116243ed.js"},{"revision":"4333b1fc9b734c1861c3180b00835ff3","url":"js/component-7110ce6c.js"},{"revision":"9278007f07dc93f4bd4f13b37f648350","url":"js/component-8daed07e.js"},{"revision":"c1db12a0a81e33e85fe5ede488c1da5e","url":"js/component-e62b37c5.js"},{"revision":"a47ec54372b74b6c24b3c0ea7a162968","url":"js/global.css-336db5a8.js"},{"revision":"f53bc081296e7db682752f267d4755ae","url":"js/index-44cd9a06.js"},{"revision":"95ff50489bad432a42bc94a7d241c850","url":"js/index-58b01aca.js"},{"revision":"aa5d8d7c3e31aa971513ecff251156c3","url":"js/index-d1a3e3a7.js"},{"revision":"072ff824202e9d41ab784d20a1953ba8","url":"js/index-d3a726f5.js"},{"revision":"fdd3d39a9f8f9d768c8018e676a2ee9f","url":"js/index.esm-7eb7b26c.js"},{"revision":"abf09ea6d2bc591a5555e348e75f7819","url":"js/index.esm-fc25e5f1.js"},{"revision":"33575f692d9caee414939443ddaec063","url":"js/index.js"},{"revision":"1ccf79c2efecf1ca849e25e44517f5ff","url":"js/list-c4a1fe10.js"},{"revision":"4ccfff727dc297d1031dbb91942aeb8f","url":"js/lit-element-8579d21b.js"},{"revision":"57ef5c01d4eaca64cc4bfa0cc4476bc1","url":"js/mwc-button-64e5fef8.js"},{"revision":"414669c975f3e8803f14eee61c3c81e5","url":"js/mwc-linear-progress-96fd8239.js"},{"revision":"d8c5a013ae4c697b97f99bf5d3085b66","url":"js/mwc-snackbar-20a1f281.js"},{"revision":"926df57e81c91d162f594598ee663492","url":"js/mwc-textfield-59acf406.js"},{"revision":"a62a6560062240373e9d07e5ee95451c","url":"js/page-df6660f4.js"},{"revision":"130472064f59420ea755533334254233","url":"js/settings-599ecc45.js"},{"revision":"453c8f32520fb80fbe4fa5023d2a23ba","url":"js/settings-component-0074de32.js"},{"revision":"206d569a0cafac7a09b561812dff1452","url":"js/tslib.es6-236f9aed.js"},{"revision":"b4f89e75b397d7cd2d0759f5c1d3f707","url":"js/workbox-window.prod.es5-e4e3663e.js"},{"revision":"b822ae4d88ffbe29084182a10de9c12b","url":"service-worker.js"}]);
