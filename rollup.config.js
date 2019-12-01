import commonjs from "rollup-plugin-commonjs";
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
    commonjs(),
    resolve({ dedupe: ["lit-element", "lit-html"] }),
    typescript(),
    terser()
  ],
  preserveSymlinks: true
};
