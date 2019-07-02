const path = require("path");
const glob = require("glob");

const withSass = require("@zeit/next-sass");
const withCSS = require("@zeit/next-css");
module.exports = withCSS(withSass());
