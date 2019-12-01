import commonjs from "rollup-plugin-commonjs";
import replace from "rollup-plugin-replace";
import resolve from "rollup-plugin-node-resolve";
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
    terser()
  ],
  preserveSymlinks: true
};
