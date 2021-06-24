import path from 'path';
import { readdir, writeFile } from 'fs/promises';

;(async () => {
  const rootSrc = path.join(process.cwd(), 'txt');
  const outputFile = path.join(process.cwd(), 'ext.json');
  try {
    const files = await readdir(rootSrc);
    const exts = ['diff'];
    for (const file of files) {
      const ext = path.extname(file.replace(/.txt$/g, '')).replace(/^./g, '')
      console.log('✅', '\x1b[32;1m', ext, '\x1b[0m', file);
      if (!/^diff/.test(file)) {
        exts.push(ext);
      }
    }
    await writeFile(outputFile, JSON.stringify(exts, null, 2));
    console.log();
    console.log('✅', '\x1b[32;1m', path.basename(outputFile), '\x1b[0m', outputFile);
    console.log();
  } catch (error) {
    console.log('Error:', error)
  }
})();