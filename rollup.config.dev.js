import typescript from "rollup-plugin-typescript2";
import baseConfig from "./rollup.config.base";

export default {
  ...baseConfig,
  plugins: [
    ...baseConfig.plugins,
    typescript({ tsconfig: "tsconfig.dev.json" })
  ]
};
