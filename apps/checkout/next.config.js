const NextFederationPlugin = require("@module-federation/nextjs-mf");

module.exports = {
  webpack(config, options) {
    const { webpack } = options;
    if (!options.isServer) {
      config.plugins.push(
        new NextFederationPlugin({
          name: "checkout",
          remotes: {
            home: `home@http://localhost:3003/_next/static/chunks/remoteEntry.js`,
          },
          filename: "static/chunks/remoteEntry.js",
          exposes: {
            "./title": "./components/exposedTitle.js",
            "./checkout": "./pages/checkout",
            "./pages-map": "./pages-map.js",
          },
          shared: {},
          extraOptions: {},
        })
      );
    }

    return config;
  },
};
