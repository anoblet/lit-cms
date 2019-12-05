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
    "revision": "91bbffa84c114eecfdacfd435d54fe1e"
  },
  {
    "url": "js/component-626bdc32.js",
    "revision": "d6aa9627c3ce767ce4b7f46517f192eb"
  },
  {
    "url": "js/create-cd503382.js",
    "revision": "02f48d4d1573ec3bd1533ba9d3cd5378"
  },
  {
    "url": "js/edit-005c684b.js",
    "revision": "1a961b1787ccbe6d6a62c8c627f1fd0d"
  },
  {
    "url": "js/index-2c2b7bb0.js",
    "revision": "ffdce362426e547518acf9c3d665320e"
  },
  {
    "url": "js/index-53622c69.js",
    "revision": "649fc8a1e0581f5c3eaf5a824d4ab49e"
  },
  {
    "url": "js/index-a52cb9df.js",
    "revision": "13971a5f2f021f33ceea2114549d63a6"
  },
  {
    "url": "js/index.esm-72bd1f9e.js",
    "revision": "73c6548b440fd9b448102e8e57efcf6f"
  },
  {
    "url": "js/index.esm-9971de86.js",
    "revision": "88ccbb019a934bbe1f7f11b0b1db9867"
  },
  {
    "url": "js/index.js",
    "revision": "b409ca55da23251e86c45ad40f8f9a77"
  },
  {
    "url": "js/list-a7151fce.js",
    "revision": "17d6dd5d7044cd4605d3cfa41f84c33e"
  },
  {
    "url": "js/lit-element-69e5798f.js",
    "revision": "f92861599c078a78e7b24c250ee4bed3"
  },
  {
    "url": "js/page-df6660f4.js",
    "revision": "a62a6560062240373e9d07e5ee95451c"
  },
  {
    "url": "js/read-656dd983.js",
    "revision": "21321bfec6ac6b36aaf82ae296ef99e8"
  },
  {
    "url": "js/settings-component-3adc5321.js",
    "revision": "a36ae438aef1eaf5e1250537ba1910cd"
  },
  {
    "url": "js/settings-d8c53455.js",
    "revision": "30f30c40703facfb6aa7ce891251a835"
  },
  {
    "url": "js/tslib.es6-17335463.js",
    "revision": "2adecfe7c77ed7031be01d405c7bf01e"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
