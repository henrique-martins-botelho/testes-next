const NextFederationPlugin = require("@module-federation/nextjs-mf");

module.exports = {
  webpack(config, options) {
    if (!options.isServer) {
      config.plugins.push(
        new NextFederationPlugin({
          name: "home",
          filename: "static/chunks/remoteEntry.js",
          remotes: {
            checkout:
              "checkout@http://localhost:3000/_next/static/chunks/remoteEntry.js",
          },
          exposes: {
            "./home": "./pages/index.js",
            "./pages-map": "./pages-map.js",
          },
          shared: {},
        })
      );
    }

    return config;
  },
};
