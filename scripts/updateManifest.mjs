import fs from "fs";
import path from "path";
import { config } from "dotenv";

// Load environment variables from the .env file
config();

// Access the environment variable
const shouldUpdateManifest = process.env.UPDATE_MANIFEST_VERSION === "true";

if (shouldUpdateManifest) {
    const packageJsonPath = path.join(process.cwd(), "package.json");
    const manifestPath = path.join(process.cwd(), "manifest.json");

    // Read the version from package.json
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"));
    const newVersion = packageJson.version;

    // Read the current manifest.json
    const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));

    // Set the version in manifest.json to match package.json
    manifest.version = newVersion;

    // Write the updated manifest.json back to disk
    fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));

    console.log(
        `Updated manifest.json version to match package.json version: ${newVersion}`,
    );
} else {
    console.log("Skipping manifest.json update.");
}
