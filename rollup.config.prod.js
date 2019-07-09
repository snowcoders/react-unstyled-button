import { terser } from "rollup-plugin-terser";
import typescript from "rollup-plugin-typescript2";
import baseConfig from "./rollup.config.base";

export default {
  ...baseConfig,
  plugins: [
    ...baseConfig.plugins,
    typescript({ tsconfig: "tsconfig.prod.json" }),
    terser({ module: true, output: { comments: "some" } })
  ]
};
