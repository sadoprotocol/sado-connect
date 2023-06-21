import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { resolve } from "path";
import dts from "vite-plugin-dts";
import * as packageJson from "./package.json";
import commonjs from "@rollup/plugin-commonjs";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "sado-connect",
      fileName: "sado-connect",
    },
    rollupOptions: {
      external: [...Object.keys(packageJson.peerDependencies)],
    }
  },
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
    }),
    commonjs()
  ],
});
