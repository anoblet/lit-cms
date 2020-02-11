import resolve from "rollup-plugin-node-resolve";
import { terser } from "rollup-plugin-terser";
import globals from 'rollup-plugin-node-globals';

module.exports = {
  input: "./service-worker.js",
  output: {
    dir: "./public",
    format: "esm"
  },
  plugins: [
    globals(),
    resolve(),
    terser(),
  ],
  preserveSymlinks: true
};
