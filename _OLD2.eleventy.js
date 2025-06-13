module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "static/images": "images" });
  eleventyConfig.addPassthroughCopy({ "static/css": "css" });
  eleventyConfig.addPassthroughCopy("admin");

  return {
    dir: {
      input: "content",
      includes: "_includes",
      data: "_data",
      output: "_site"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
};
