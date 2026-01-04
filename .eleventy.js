module.exports = function (eleventyConfig) {
  // Copy static assets exactly as-is
  eleventyConfig.addPassthroughCopy({ "styles": "styles" });

  return {
    dir: {
      input: ".",
      output: "dist"
    }
  };
};
