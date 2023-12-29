const sassPlugin = require("esbuild-sass-plugin").default;
const cssModulesPlugin = require("esbuild-css-modules-plugin");
const liveServer = require("live-server");

let options = {
  bundle: true,
  minify: true,
  // minifyWhitespace: true,
  // sourcemap: true,
  loader: { '.js': 'jsx' }
};

let builds = {
  "esbuild-browser": () => ({
    ...options,
    platform: "browser",
    format: "esm",
    // sourcemap: "external",
    outfile: "public/browser.js",
    entryPoints: ["src/index.js"],
    plugins: [sassPlugin({sourceMap: true, loadPaths: ['src/utils', 'node_modules']})],
  }),
  "esbuild-browser:dev": () => ({
    ...options,
    platform: "browser",
    format: "esm",
    outfile: "public/browser.js",
    entryPoints: ["src/index.js"],
    plugins: [sassPlugin(), cssModulesPlugin()],
  }),
};

require("esbuild")
  .build(builds[process.argv[2]]())
  .then(result => {
    liveServer.start({
        port: 8000,
        host: 'localhost',
        root: "public",
        open: true,
        watch: "everything",
        ignore: 'scss,my/templates',
        file: "index.html",
        wait: 1000,
        mount: [['/components', './node_modules']],
        logLevel: 2,
        middleware: [function (req, res, next) { next(); }]
    });
    console.log('watching...', result)
})
  .catch(() => process.exit(1));