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
    "revision": "403e38b662957b102ec2c5a8ec1b368e"
  },
  {
    "url": "js/component-17fdee44.js",
    "revision": "8332f5dcbae6f5a35bb6879715cfe993"
  },
  {
    "url": "js/create-e808f328.js",
    "revision": "ac1781c34a7c0a33c787ee6a4f3586ac"
  },
  {
    "url": "js/edit-5fa28eba.js",
    "revision": "b40614cffc1cf825ca8b391a5643748e"
  },
  {
    "url": "js/index-53622c69.js",
    "revision": "649fc8a1e0581f5c3eaf5a824d4ab49e"
  },
  {
    "url": "js/index-58b01aca.js",
    "revision": "95ff50489bad432a42bc94a7d241c850"
  },
  {
    "url": "js/index-5cd41add.js",
    "revision": "a899dffdc095b36098087b2a35f39784"
  },
  {
    "url": "js/index.esm-7eb7b26c.js",
    "revision": "fdd3d39a9f8f9d768c8018e676a2ee9f"
  },
  {
    "url": "js/index.esm-fc25e5f1.js",
    "revision": "abf09ea6d2bc591a5555e348e75f7819"
  },
  {
    "url": "js/index.js",
    "revision": "513371d6b287df5769133cba55fa2d6f"
  },
  {
    "url": "js/list-1d3397bf.js",
    "revision": "c503ce7a8b77f27821e77d2945500add"
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
    "url": "js/read-7d324b15.js",
    "revision": "d77d1dea484928931b52019de7138c49"
  },
  {
    "url": "js/settings-830c2730.js",
    "revision": "7c5932c9d092d1d2226292f4e42986e8"
  },
  {
    "url": "js/settings-component-c0efb093.js",
    "revision": "a8fe6b8c0d76fe0e86166dea932f8e81"
  },
  {
    "url": "js/tslib.es6-236f9aed.js",
    "revision": "206d569a0cafac7a09b561812dff1452"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
