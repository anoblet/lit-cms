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
    "url": "js/component-25a206f8.js",
    "revision": "7a22388307952f83522e175c42528874"
  },
  {
    "url": "js/component-64c9d611.js",
    "revision": "f32e0276c16d80486a8b9712ab1968f6"
  },
  {
    "url": "js/create-c50a6de4.js",
    "revision": "aa678d5ca220fd3a1cc09a6aca352a31"
  },
  {
    "url": "js/edit-16c16397.js",
    "revision": "e1901cd065bb3f1db1ee5dfb319e8b92"
  },
  {
    "url": "js/index-10773e4a.js",
    "revision": "5adfa7ae9ea94acdaef370c05134322e"
  },
  {
    "url": "js/index-53622c69.js",
    "revision": "649fc8a1e0581f5c3eaf5a824d4ab49e"
  },
  {
    "url": "js/index-58ea3e22.js",
    "revision": "74adc2ad4b06e510161bfd47cb0f0cc9"
  },
  {
    "url": "js/index.esm-2bd37c6f.js",
    "revision": "aa50cfd6b430425fc18046aa19e40f38"
  },
  {
    "url": "js/index.esm-52f26880.js",
    "revision": "715f6bb9e95150dbaa6b9d3f357b4f32"
  },
  {
    "url": "js/index.js",
    "revision": "64f263dead64241c098e7914bd746a95"
  },
  {
    "url": "js/list-21767c73.js",
    "revision": "55ec338d25f7b01abe84b15078216a3d"
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
    "url": "js/settings-9b56c2ff.js",
    "revision": "d9d80635bc07906dea6cf7a1820c2d55"
  },
  {
    "url": "js/settings-component-32299c6a.js",
    "revision": "bf4205abaf3b29cf625eb4230b4f13de"
  },
  {
    "url": "js/tslib.es6-4f10652d.js",
    "revision": "132e2f244bb63073d20259eeb9230499"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
