import scss from "rollup-plugin-scss";
import pkg from "./package.json";

export default {
  external: [...Object.keys(pkg.peerDependencies || {})],
  input: "./src/component.tsx",
  output: [
    {
      dir: "dist",
      entryFileNames: "[name].mjs",
      format: "es",
    },
  ],
  plugins: [
    scss({
      output: "./dist/styles.css",
    }),
  ],
};
