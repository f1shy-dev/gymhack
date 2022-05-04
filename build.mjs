import esbuild from "esbuild";
import { minifyTemplates, writeFiles } from "esbuild-minify-templates";
const watch = process.argv.includes("--watch");

await esbuild
  .build({
    entryPoints: ["src/index.js"],
    outfile: "dist/index.js",
    plugins: [minifyTemplates(), writeFiles()], // <--
    bundle: true,
    minify: true,
    minifyWhitespace: true,
    write: false, // <-- important!
    watch: {
      onRebuild(error, result) {
        if (error) console.error(`🚨 Rebuild failed (${error.message})`);
        else console.log("🎉 Rebuild succeeded");
      },
    },

    ...(!watch && { watch: false }),
  })
  .then((res) => {
    if (!watch) return;

    console.clear();
    console.log("🚀 Watching for changes...");
  });
