/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "index.html",
    "revision": "26ec4c83561382e8b80ca14800567e61"
  },
  {
    "url": "js/_commonjsHelpers-97e6d7b1.js",
    "revision": "831faed19c7560a91c6e9eec4d7b13a2"
  },
  {
    "url": "js/cache-beb0df67.js",
    "revision": "7dc53382d95ee9da3e402fdaa0b35dc6"
  },
  {
    "url": "js/component-05ea284a.js",
    "revision": "b95637560cea03d8115653a932893b53"
  },
  {
    "url": "js/component-5a30508e.js",
    "revision": "00278ea208401d453035e4ec8de97546"
  },
  {
    "url": "js/component-734e1314.js",
    "revision": "48ef6040b22d5dc376aacd8531b3bf1a"
  },
  {
    "url": "js/component-8648061d.js",
    "revision": "4f88d6277782eb698f6da185dd8d8c71"
  },
  {
    "url": "js/component-99357f4c.js",
    "revision": "d5c308af4e2e497aa3d9870c666428a7"
  },
  {
    "url": "js/global-ad4f1d81.js",
    "revision": "e7d699775eebce5e2d58ba6bbf782b00"
  },
  {
    "url": "js/index-41d62cfa.js",
    "revision": "f12f5c77e073aa706dda3f934876bfcf"
  },
  {
    "url": "js/index-5cf2015d.js",
    "revision": "0bfa84832edf6d6f2b012f0d37afa135"
  },
  {
    "url": "js/index-bf7cebf4.js",
    "revision": "b1485dcb1bb0766b2782e9e560383d88"
  },
  {
    "url": "js/index.esm-33366a7c.js",
    "revision": "9ad9b4367472b191ea0131fa69ce5b90"
  },
  {
    "url": "js/index.esm-7022ddb8.js",
    "revision": "bd56b991f07d4e2992d065442c983f5f"
  },
  {
    "url": "js/index.js",
    "revision": "a011c482103eca3d8366a045559b4b97"
  },
  {
    "url": "js/list-6d22c91c.js",
    "revision": "1d398e86872977d33c5b1b5222cc0e10"
  },
  {
    "url": "js/lit-element-e9a4e10e.js",
    "revision": "a5a9f9605d1f6702271fd13a1cfe4b73"
  },
  {
    "url": "js/marked-0e152a15.js",
    "revision": "3ae2c6c82258d12e698f633325a1ce64"
  },
  {
    "url": "js/page-df6660f4.js",
    "revision": "a62a6560062240373e9d07e5ee95451c"
  },
  {
    "url": "js/read-b269fbea.js",
    "revision": "874fd8b35f0362bc1b9dd1d072213204"
  },
  {
    "url": "js/settings-373d108a.js",
    "revision": "fb251536aca3c7c3b4f7fc7fb8020274"
  },
  {
    "url": "js/settings-component-5d18983f.js",
    "revision": "95715aacab9dae0ed082e11917b22f5e"
  },
  {
    "url": "js/tslib.es6-e8831f91.js",
    "revision": "2f6386612f1ab97dda2fa9d47de04cfe"
  },
  {
    "url": "js/unsafe-html-9eb2a75e.js",
    "revision": "8f47071172c0b81a502de7a5434f6cd8"
  },
  {
    "url": "js/view-4a40996e.js",
    "revision": "3f600f2351d160bd6a12fa254a6c3e46"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
