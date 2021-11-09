import { babel } from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import external from "rollup-plugin-peer-deps-external";
import scss from "rollup-plugin-scss";
import { terser } from "rollup-plugin-terser";

// import postcss from "rollup-plugin-postcss";

export default [
  {
    input: "./src/index.js",
    output: [
      {
        file: "dist/index.js",
        format: "cjs",
      },
      {
        file: "dist/index.es.js",
        format: "es",
        exports: "named",
      },
    ],
    plugins: [
      babel({
        exclude: "node_modules/**",
        presets: ["@babel/preset-react"],
        babelHelpers: "bundled",
      }),
      resolve(),
      external(),
      // postcss({
      //   plugins: [],
      //   minimise: true,
      // }),
      scss({
        output: "./dist/css/style.css",
        failOnError: true,
      }),
      terser(),
    ],
  },
];
