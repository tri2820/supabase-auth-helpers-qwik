import { defineConfig } from "vite";
import { resolve } from "path";
import dts from "vite-plugin-dts";

export default defineConfig({
  build: {
    outDir: "lib",
    lib: {
      formats: ["es", "cjs"],
      entry: resolve(__dirname, "src/index.ts"),
    },
    rollupOptions: {
      external: [
        "@builder.io/qwik",
        "@builder.io/qwik-city",
        "@builder.io/qwik/build",
        "@supabase/supabase-js",
        "@supabase/auth-helpers-shared",
      ],
    },
  },
  plugins: [
    dts({
      include: ["src"],
      insertTypesEntry: true,
    }),
  ],
});
