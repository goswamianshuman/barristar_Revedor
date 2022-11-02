/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
};
module.exports = nextConfig;

const path = require("path");
const withSass = require("@zeit/next-sass");
const withCss = require("@zeit/next-css");

module.exports = withSass({
  cssModules: true,
});

module.exports = withSass(withCss());

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};

module.exports = {
  distDir: "build",
};
