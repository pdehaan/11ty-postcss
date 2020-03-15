module.exports = eleventyConfig => {
  eleventyConfig.addPairedShortcode("postcss", require("./utils/transform-css"));

  return {
    dir: {
      input: "src",
      output: "www"
    }
  };
};
