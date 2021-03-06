// rollup.config.js
import commonjs from "rollup-plugin-commonjs";
import resolve from "rollup-plugin-node-resolve";
import babel from "rollup-plugin-babel";
import uglify from "rollup-plugin-uglify";
import replace from "rollup-plugin-replace";

export default {
  entry: "src/index.js",
  format: "umd",
  sourceMap: "inline",
  name: "composerize",
  plugins: [
    replace({
      "process.env.NODE_ENV": JSON.stringify("production")
    }),
    resolve(),
    babel({
      plugins: ["external-helpers"],
      exclude: "node_modules/**" // only transpile our source code
    }),
    commonjs({
      namedExports: { "node_modules/spawn-args/index.js": ["spawnargs"] } // Default: undefined
    }),
    uglify()
  ],
  dest: "dist/composerize.js"
};
