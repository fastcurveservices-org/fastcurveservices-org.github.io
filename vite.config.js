import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import { execSync } from "child_process";

const commitHash = execSync("git rev-parse --short HEAD").toString().trim();
// https://vite.dev/config/
export default defineConfig({
  base: "/", // 👈 Context path
  plugins: [react()],
  build: {
    assetsDir: `static/${commitHash}`, // put static assets in versioned folder
  },
});
