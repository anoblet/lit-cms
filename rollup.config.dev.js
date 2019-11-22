import commonjs from "rollup-plugin-commonjs";
import copy from "rollup-plugin-copy";
import resolve from "rollup-plugin-node-resolve";
import { terser } from "rollup-plugin-terser";
import typescript from "rollup-plugin-typescript";

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
    commonjs(),
    resolve({ dedupe: ["lit-element", "lit-html"] }),
    typescript(),
    indexHTML({ preserveSymlinks: true })
  ],
  preserveSymlinks: true
};
