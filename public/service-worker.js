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
    "revision": "5bc1f903f1d5541f1216535f1d13de57"
  },
  {
    "url": "js/component-25a206f8.js",
    "revision": "7a22388307952f83522e175c42528874"
  },
  {
    "url": "js/component-430af5cc.js",
    "revision": "e687326c43d6582e7b20fb1b153742d9"
  },
  {
    "url": "js/create-5bd66ea4.js",
    "revision": "dbe93913bbb955adce368c9381d2b822"
  },
  {
    "url": "js/edit-727b93c9.js",
    "revision": "623e6bb2d82447e8a0ed18040d707247"
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
    "url": "js/index-64d0b0bd.js",
    "revision": "71113032b4c451dcb894110b4d8eebba"
  },
  {
    "url": "js/index.esm-209eb5b3.js",
    "revision": "f4d09c7f890e9574ca600036d454497b"
  },
  {
    "url": "js/index.esm-c0be78e3.js",
    "revision": "a3738f318edd70b82979c5d097b99fa1"
  },
  {
    "url": "js/index.js",
    "revision": "be65253435a110821927a633e5923fb1"
  },
  {
    "url": "js/list-85f2cf59.js",
    "revision": "b61ed245e3ac81aba0610c6d080c9c81"
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
    "url": "js/read-b0399066.js",
    "revision": "710a593b78f40efa5856cb198176e056"
  },
  {
    "url": "js/settings-61221069.js",
    "revision": "a267d2d89be271b895f7eb4d9382fbba"
  },
  {
    "url": "js/settings-component-0a4138ea.js",
    "revision": "21224eb6c28226ea32dacd77c446ef7d"
  },
  {
    "url": "js/tslib.es6-353ce55a.js",
    "revision": "7d0f739d458feb3ee3fc7630e0c11865"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
