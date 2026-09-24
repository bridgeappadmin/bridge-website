// Copies the SPA entry to 404.html so static hosts without rewrite rules
// (GitHub Pages) still serve client-side routes.
import { copyFileSync, existsSync } from 'node:fs';

if (existsSync('dist/index.html')) {
  copyFileSync('dist/index.html', 'dist/404.html');
  console.log('postbuild: wrote dist/404.html');
}
