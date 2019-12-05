import commonjs from "rollup-plugin-commonjs";
import firebase from './node_modules/firebase/package.json';
import minifyHTML from 'rollup-plugin-minify-html-literals';
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
      "process.env.NODE_ENV": JSON.stringify("production"),
      'FIREBASE_SDK_VERSION': firebase.version,
    }),
    commonjs(),
    resolve({ dedupe: ["lit-element", "lit-html"] }),
    typescript(),
    minifyHTML(),
    terser(),
    size()
  ],
  preserveSymlinks: true
};
