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
    "revision": "af4ab6420500b3e68068646f45d60916"
  },
  {
    "url": "js/component-057a3169.js",
    "revision": "d4cf2f4703652131ff1d378b6d76f7ab"
  },
  {
    "url": "js/index-81f6f9f0.js",
    "revision": "5de6fff9b6a37ed39b12106b86f9f502"
  },
  {
    "url": "js/index.esm-b1a71499.js",
    "revision": "aa1e27dd06cdcce96b5a9f308424cdc6"
  },
  {
    "url": "js/index.esm-f071ab9e.js",
    "revision": "15a7182cbf7da3d2a4ec66e6b7ee6d04"
  },
  {
    "url": "js/index.js",
    "revision": "fcd8c3a0eb1e567cc5cd3d1a4fa9518d"
  },
  {
    "url": "js/lit-element-69e5798f.js",
    "revision": "f92861599c078a78e7b24c250ee4bed3"
  },
  {
    "url": "js/settings-component-1a3fb17c.js",
    "revision": "114f3355ac15fe4f258530370c271a01"
  },
  {
    "url": "js/settings-ee44edc0.js",
    "revision": "ab5135d5962f8ee5d12ecccabd44a01b"
  },
  {
    "url": "js/tslib.es6-c46f16f7.js",
    "revision": "af8c607d97334e2f9a79bb1cdf6cf4d4"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
