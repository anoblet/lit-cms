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
    "url": "js/create-2b1d6781.js",
    "revision": "fb59d01f48132deed0cfe5fb0094241f"
  },
  {
    "url": "js/edit-246816de.js",
    "revision": "116a11b360b4d3f504ad79e1f9aaf9f6"
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
    "url": "js/index-960f30f5.js",
    "revision": "3bd3bfc2b6c8c8ba8ebb5d8752bc2ba6"
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
    "revision": "443df2c491b5556c73044de32723f7cb"
  },
  {
    "url": "js/list-398a0c36.js",
    "revision": "97c34e47478eaadb59c74fcc6b735a3a"
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
    "url": "js/read-0e4555be.js",
    "revision": "9e28d68ecb560244aba072151528e457"
  },
  {
    "url": "js/settings-component-0c077d74.js",
    "revision": "1c236cf52a8165f11cd8d15d58e9cf0a"
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
