import { createWriteStream } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import archiver from "archiver";

// Fix `__dirname` in ES modules
const __dirname = dirname(fileURLToPath(import.meta.url));

const distPath = join(__dirname, "..", "dist");
const output = createWriteStream(join(__dirname, "..", "extension.zip"));
const archive = archiver("zip", { zlib: { level: 9 } });

output.on("close", () => {
    console.log(`ZIP created: ${archive.pointer()} total bytes`);
});

archive.on("warning", (err) => {
    if (err.code === "ENOENT") console.warn(err);
    else throw err;
});

archive.on("error", (err) => {
    throw err;
});

archive.pipe(output);
archive.directory(distPath, false); // false preserves directory structure
archive.finalize();
