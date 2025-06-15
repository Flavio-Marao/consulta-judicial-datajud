
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// Melhora o padrão glob e garante que todas as pastas grandes/relevantes sejam ignoradas
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    watch: {
      ignored: [
        '**/.git/**',
        '**/node_modules/**',
        '**/dist/**',
        '**/.next/**',
        '**/.vercel/**',
        '**/.cache/**',
        '**/build/**',
        '**/coverage/**',
        '**/out/**',
        '**/.tmp/**',
        '**/logs/**',
      ]
    }
  },
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
