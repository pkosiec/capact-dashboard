import resolve from "@rollup/plugin-node-resolve";
import replace from '@rollup/plugin-replace';
import commonJS from "@rollup/plugin-commonjs";
import postcss from "rollup-plugin-postcss";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import { terser } from "rollup-plugin-terser";
import json from "@rollup/plugin-json";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const packageJSON = require("./package.json");

const external = [
  ...Object.keys(packageJSON.dependencies || {}),
  ...Object.keys(packageJSON.peerDependencies || {}),
];

const config = [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJSON.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJSON.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      resolve({
        browser: true,
      }),
      replace({
        preventAssignment: true,
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      }),
      commonJS(),
      typescript({
        tsconfig: "./tsconfig.json",
        exclude: [
          "**/*.test.ts",
          "**/*.test.tsx",
          "**/*.stories.mdx",
          "**/*.stories.ts",
        ],
      }),
      postcss(),
      json(),
      terser(),
    ],
    external,
  },
  {
    input: "dist/esm/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
    external: [/\.css$/, ...external],
  },
];

export default config;
