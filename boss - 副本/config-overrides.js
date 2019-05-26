const {
  override,
  fixBabelImports,
  addLessLoader,
  addDecoratorsLegacy,
  overrideDevServer,
  addPostcssPlugins
} = require("customize-cra");
const devServer = () => config => {
  return {
    ...config,
    proxy: {
      "/api": {
        target: "http://localhost:9093/",
        changeOrigin: true,
        ws: false,
        pathRewrite: { "^/api": "" }
      }
    }
  };
};
module.exports = {
  webpack: override(
    fixBabelImports("import", {
      libraryName: "antd-mobile",
      style: "css"
    }),
    addLessLoader({
      strictMath: true,
      noIeCompat: true,
      localIdentName: "[local]--[hash:base64:5]" // if you use CSS Modules, and custom `localIdentName`, default is '[local]--[hash:base64:5]'.
    }),
    addDecoratorsLegacy()
    // addPostcssPlugins([require("postcss-px2rem")({ remUnit: 37.5 })])
  ),
  devServer: overrideDevServer(devServer())
};
