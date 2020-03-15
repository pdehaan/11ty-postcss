const path = require("path");
const postcss = require("postcss");

module.exports = async code => {
  const rawFilepath = path.join(__dirname, `../src/_includes/entry.css`);
  return postcss([
    require("precss"),
    require("postcss-import"),
    require("postcss-custom-selectors"),
    require("autoprefixer"),
    require("cssnano")
  ])
    .process(code, { from: rawFilepath })
    .then(result => result.css);
};