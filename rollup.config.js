import copy from "rollup-plugin-copy";
import modulepreload from "rollup-plugin-modulepreload";
import resolve from "rollup-plugin-node-resolve";
import { terser } from "rollup-plugin-terser";
import typescript from "rollup-plugin-typescript2";

const path = require("path");
const indexHTML = require("rollup-plugin-index-html");

module.exports = {
  input: "./index.html",
  output: {
    dir: "./dist",
    format: "esm"
  },
  plugins: [
    copy({
      targets: [
        { src: "src/assets", dest: "dist" },
        { src: "robots.txt", dest: "dist" },
        { src: "manifest.json", dest: "dist" }
      ]
    }),
    resolve({ dedupe: ["lit-element", "lit-html"] }),
    typescript({ objectHashIgnoreUnknownHack: true }),
    indexHTML({ preserveSymlinks: true }),
    terser()
    // modulepreload({
    //   prefix: "modules",
    //   index: "dist/index.html"
    // })
  ],
  preserveSymlinks: true
};
