
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import compression from "vite-plugin-compression";
import { visualizer } from "rollup-plugin-visualizer";

export default defineConfig({
  plugins: [
    react(), 

    tailwindcss(),

    // Generate Brotli compressed files
    compression({
      algorithm: "brotliCompress",
      ext: ".br",
    }),

    // Bundle analyzer
    visualizer({
      filename: "dist/stats.html",
      open: false,
      gzipSize: true,
      brotliSize: true,
    }),
  ],

  optimizeDeps: {
    include: [
      "react",
      "react-dom",
      "framer-motion",

      // Pre-bundle only the icon packs you actually use
      "react-icons/fa",
      "react-icons/si",
      "react-icons/bi",

      "lucide-react",
    ],
  },

  build: {
    target: "esnext",

    // JavaScript minifier
    minify: "terser",

    // CSS minifier (faster and more aggressive)
    cssMinify: "lightningcss",

    cssCodeSplit: true,

    sourcemap: false,

    reportCompressedSize: true,

    chunkSizeWarningLimit: 800,

    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ["console.log"],
      },
      format: {
        comments: false,
      },
    },

    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (id.includes("react")) {
              return "react-vendor";
            }

            if (id.includes("framer-motion")) {
              return "framer-motion";
            }

            if (id.includes("react-icons")) {
              return "icons";
            }

            if (id.includes("lucide-react")) {
              return "lucide";
            }

            if (id.includes("@emailjs")) {
              return "emailjs";
            }

            return "vendor";
          }
        },

        assetFileNames: "assets/[name]-[hash][extname]",
        chunkFileNames: "assets/[name]-[hash].js",
        entryFileNames: "assets/[name]-[hash].js",
      },
    },
  },
});  