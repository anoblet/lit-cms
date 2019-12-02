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
    "url": "js/component-b48339f0.js",
    "revision": "92b77c1487e49b376fecef9a5646fa6b"
  },
  {
    "url": "js/create-70bc7158.js",
    "revision": "3237db9e4a2140473c4559fc89d1bbe0"
  },
  {
    "url": "js/edit-c8e97e5e.js",
    "revision": "0d4c87945be1215e5ab44187e1751739"
  },
  {
    "url": "js/index-064a709e.js",
    "revision": "54cdb776cf69a133bc9b712a4e78c33a"
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
    "url": "js/index.esm-209eb5b3.js",
    "revision": "f4d09c7f890e9574ca600036d454497b"
  },
  {
    "url": "js/index.esm-7b4c1ae5.js",
    "revision": "d7702d179ddfea88e4ffd774b0c9ef46"
  },
  {
    "url": "js/index.esm-c0be78e3.js",
    "revision": "a3738f318edd70b82979c5d097b99fa1"
  },
  {
    "url": "js/index.js",
    "revision": "b21c4e8c89754ddb183d1c90bae297b4"
  },
  {
    "url": "js/list-d8ab0439.js",
    "revision": "e5d4c2cbaee55b89d6ff7d6ac9184e78"
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
    "url": "js/read-2675e810.js",
    "revision": "d524cacb74f43b0b53ff2917aa0cb173"
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
