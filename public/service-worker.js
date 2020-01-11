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
    "revision": "5e37689e9a5669ca81a9caa9d0fdf4a9"
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
    "url": "js/component-21cbadad.js",
    "revision": "389d365bf83e21c0ea0c50c35fda0e71"
  },
  {
    "url": "js/component-5bb9ac79.js",
    "revision": "fe7f5bf0a8efc12ace3a2eaf24fbb101"
  },
  {
    "url": "js/component-886f2b1e.js",
    "revision": "5eff5e577d96e97750b496cb5a67be76"
  },
  {
    "url": "js/component-d7d7b92e.js",
    "revision": "e187a33f1b5cbace1c3839d08369105b"
  },
  {
    "url": "js/component-e9e05e05.js",
    "revision": "661350bf87cd8011f7f5de0481c4ded6"
  },
  {
    "url": "js/global.css-494c0757.js",
    "revision": "00171df7f0af6d7b5c162d4549d90357"
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
    "revision": "4337ddd4bffc58b8957dab8829275d7a"
  },
  {
    "url": "js/list-6f3243ca.js",
    "revision": "bac585c3dae6774c59b63950a44c77a1"
  },
  {
    "url": "js/lit-element-e9a4e10e.js",
    "revision": "a5a9f9605d1f6702271fd13a1cfe4b73"
  },
  {
    "url": "js/lit-mobx-b71cd0ff.js",
    "revision": "173b766e212d092ed2fad1a53aa0126d"
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
    "url": "js/read-c1103c78.js",
    "revision": "e21502bab9120bdd6c1820ad9ce37c65"
  },
  {
    "url": "js/settings-854f4b36.js",
    "revision": "90fce3581e71e96d7f2d23c0bb756c93"
  },
  {
    "url": "js/settings-component-34a5e0ea.js",
    "revision": "607cab01b426368b1fc576c058ae9c94"
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
