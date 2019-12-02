import commonjs from "rollup-plugin-commonjs";
import modulepreload from "rollup-plugin-modulepreload";
import replace from "rollup-plugin-replace";
import resolve from "rollup-plugin-node-resolve";
import size from "rollup-plugin-size";
import { terser } from "rollup-plugin-terser";
import typescript from "rollup-plugin-typescript";

module.exports = {
  input: "./src/index.ts",
  output: {
    dir: "./public/js",
    format: "esm"
  },
  plugins: [
    replace({
      "process.env.NODE_ENV": JSON.stringify("production")
    }),
    commonjs(),
    resolve({ dedupe: ["lit-element", "lit-html"] }),
    typescript(),
    terser(),
    modulepreload({
      prefix: "js",
      index: "public/index.html"
    }),
    size()
  ],
  preserveSymlinks: true
};
