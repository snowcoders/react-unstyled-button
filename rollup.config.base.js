import scss from "rollup-plugin-scss";
import pkg from "./package.json";

export default {
  external: [...Object.keys(pkg.peerDependencies || {})],
  input: "./src/component.tsx",
  output: [
    {
      file: pkg.main,
      format: "cjs"
    },
    {
      file: pkg.module,
      format: "es"
    }
  ],
  plugins: [
    scss({
      output: "./dist/styles.css"
    })
  ]
};
