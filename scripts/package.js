const fs = require('fs');
const path = require('path');
const archiver = require('archiver');

const distPath = path.join(__dirname, '..', 'dist');
const output = fs.createWriteStream(path.join(__dirname, '..', 'extension.zip'));
const archive = archiver('zip', { zlib: { level: 9 } });

output.on('close', () => {
  console.log(`ZIP created: ${archive.pointer()} total bytes`);
});

archive.on('warning', (err) => {
  if (err.code === 'ENOENT') console.warn(err);
  else throw err;
});

archive.on('error', (err) => {
  throw err;
});

archive.pipe(output);
archive.directory(distPath, false); // false preserves directory structure
archive.finalize();