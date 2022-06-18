import path from 'path';
import { readdir, writeFile, mkdir, readFile } from 'fs/promises';

async function createJS(filename = '') {
  const outDir = path.resolve(process.cwd(), 'src');
  await mkdir(outDir, { recursive: true });
  const txt = (await readFile(filename)).toString();
  const code = `const code = \`${txt.toString().replace(/`/ig, '\\`').replace(/\$\{/g, '\\${')}\`;\n\n export default code;`;
  const name = path.basename(filename).replace(/^sample\./, '').replace(/\.txt$/, '');
  const outfile = path.resolve(outDir, name + '.js');
  // console.log('outDir:name:', name, outfile)
  await writeFile(outfile, code);
  console.log('✅', 'JS \x1b[32;1m', path.basename(outfile), '\x1b[0m', outfile);
}

;(async () => {
  const rootSrc = path.join(process.cwd(), 'txt');
  const outputFileExts = path.join(process.cwd(), 'ext.json');
  const outputFileNames = path.join(process.cwd(), 'names.txt.json');
  try {
    const files = await readdir(rootSrc);
    const exts = ['diff'];
    for (const file of files) {
      const ext = path.extname(file.replace(/.txt$/g, '')).replace(/^./g, '')
      // console.log('✅', '\x1b[32;1m', ext, '\x1b[0m', file);
      if (!/^diff/.test(file)) {
        exts.push(ext);
      }
      createJS(path.resolve('./txt', file));
    }
    await writeFile(outputFileExts, JSON.stringify(exts, null, 2));
    console.log();
    console.log('✅', '\x1b[32;1m', path.basename(outputFileExts), '\x1b[0m', outputFileExts);
    await writeFile(outputFileNames, JSON.stringify(files, null, 2));
    console.log('✅', '\x1b[32;1m', path.basename(outputFileNames), '\x1b[0m', outputFileExts);
    console.log();
  } catch (error) {
    console.log('Error:', error)
  }
})();