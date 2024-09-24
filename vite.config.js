import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import AutoImport from 'unplugin-auto-import/vite';

export default defineConfig({
  plugins: [
    react(),
    AutoImport({
      imports: ['react'], // Automatise l'import de React et d'autres packages si nécessaire
      dts: 'src/auto-imports.d.ts', // Crée un fichier de déclaration TypeScript si tu utilises TypeScript
    }),
  ],
});
