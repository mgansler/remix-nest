/**
 * @type {import('@remix-run/dev/config').AppConfig}
 */
module.exports = {
  appDirectory: "web",
  assetsBuildDirectory: "public/build",
  publicPath: "/build/",
  serverBuildDirectory: "server/build",
  devServerPort: 8002,
  ignoredRouteFiles: [".*"]
};
