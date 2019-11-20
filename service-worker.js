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
    "url": "components/app-component/component.ts",
    "revision": "d2df08ce040e9ab0ba7cd5c7dd60bb2e"
  },
  {
    "url": "components/app-component/style.ts",
    "revision": "8bfd20d917385323078bda5e34905e1f"
  },
  {
    "url": "components/app-component/template.ts",
    "revision": "c498d007a8914b57ac18d5328289ac95"
  },
  {
    "url": "firebase.ts",
    "revision": "10eec74de6bd496dd1991be402076f5b"
  },
  {
    "url": "global-style.ts",
    "revision": "ffcbad161d661989e9ba468d4b43096f"
  },
  {
    "url": "index.ts",
    "revision": "be960d720194d90c3573db88e01b35ee"
  },
  {
    "url": "models/page.ts",
    "revision": "da2350a982c5ae549fe89ae5baea9b2f"
  },
  {
    "url": "page/create.ts",
    "revision": "e078c8812e1397bcd6e1b8b8abf74f11"
  },
  {
    "url": "page/edit.ts",
    "revision": "7aedc868aeec1e9ffd5788522de7611e"
  },
  {
    "url": "page/list.ts",
    "revision": "4fcea77d64c504a59b49850cd3942ad7"
  },
  {
    "url": "page/read.ts",
    "revision": "32bae7ca1baa9c633e14f3bcd1379fbd"
  },
  {
    "url": "pages.ts",
    "revision": "963fd3c870b48bee4bdbac91bbc5c6bf"
  },
  {
    "url": "pages/home.ts",
    "revision": "808511022fb2c5c11384597577a6df48"
  },
  {
    "url": "posts.ts",
    "revision": "30a893eeb9c8d163c253864086082e8d"
  },
  {
    "url": "routes.ts",
    "revision": "830f6112422d15e2eadfec584477db1e"
  },
  {
    "url": "styles/global.ts",
    "revision": "48c12b9855ea40dc25f0dc5738e2f9b2"
  },
  {
    "url": "templates/drawer.ts",
    "revision": "ebde29be81a708b63d4bf7d03b03cdc4"
  },
  {
    "url": "templates/footer.ts",
    "revision": "e41d656265146b888148d4efb384c1bd"
  },
  {
    "url": "templates/header.ts",
    "revision": "50634bca4389314e9a8e1c878661769a"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
