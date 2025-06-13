module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("static");
  eleventyConfig.addPassthroughCopy({ "static/images": "images" });
  eleventyConfig.addPassthroughCopy("admin");
  eleventyConfig.addPassthroughCopy("static/css");


  return {
    dir: {
      input: "content",
      includes: "_includes",
      data: "_data",
      output: "_site"
    },
    passthroughFileCopy: true,
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
};
