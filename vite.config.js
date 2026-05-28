import fs from 'node:fs';
import path from 'node:path';

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

function copyOldWebsite() {
  return {
    name: 'copy-old-website',
    closeBundle() {
      const sourceDir = path.resolve(__dirname, 'OLD WEBSITE', 'public_html');
      const targetDir = path.resolve(__dirname, 'dist', 'OLD WEBSITE', 'public_html');

      if (!fs.existsSync(sourceDir)) {
        return;
      }

      fs.mkdirSync(path.dirname(targetDir), { recursive: true });
      fs.cpSync(sourceDir, targetDir, { recursive: true, force: true });
    }
  };
}

export default defineConfig({
  plugins: [react(), copyOldWebsite()]
});
