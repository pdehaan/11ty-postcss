module.exports = eleventyConfig => {
  eleventyConfig.addFilter("postcss", require("./utils/transform-css"));

  return {
    dir: {
      input: "src",
      output: "www"
    }
  };
};
