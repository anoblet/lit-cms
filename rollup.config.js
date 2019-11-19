// import commonjs from "rollup-plugin-commonjs";
import resolve from "rollup-plugin-node-resolve";
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
    resolve({ dedupe: ["lit-element", "lit-html"] }),
    typescript({ objectHashIgnoreUnknownHack: true }),
    indexHTML({ preserveSymlinks: true })
  ],
  preserveSymlinks: true
};
