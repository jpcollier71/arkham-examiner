module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "static/images": "images" });
  eleventyConfig.addPassthroughCopy({ "static/css": "css" });
  eleventyConfig.addPassthroughCopy("admin");

  eleventyConfig.addShortcode("chapter_blocks", function(chapters, content) {
    const parts = content.split(/<h2>(.*?)<\/h2>/).filter(Boolean);
    const rendered = [];

    for (let i = 0; i < chapters.length; i++) {
      const chapter = chapters[i];
      const html = parts[i * 2 + 1] || "";
      rendered.push(`
	  <div class="chapter-block">
		<div class="chapter-image">
		  <img src="${chapter.image}" alt="${chapter.title}" />
		</div>
		<h2>${chapter.title}</h2>
		<div class="chapter-text">${html}</div>
	  </div>
	`);
    }

    return rendered.join("\n");
  });

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
