module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("static");
  eleventyConfig.addPassthroughCopy("admin");

  eleventyConfig.addShortcode("chapter_blocks", function(chapters, content) {
    const rendered = [];
    const parts = content.split(/<h2>(.*?)<\/h2>/).filter(Boolean);
    for (let i = 0; i < chapters.length; i++) {
      const chapter = chapters[i];
      const text = parts[i * 2 + 1] || "";  // skip the first part before any <h2>
      rendered.push(`
        <div class="chapter-block" style="margin-top: 3em;">
          ${chapter.image ? `<img src="${chapter.image}" alt="${chapter.title}" style="max-width: 100%; margin-bottom: 1em;" />` : ""}
          <h2>${chapter.title}</h2>
          <div class="chapter-text">${text}</div>
        </div>
      `);
    }
    return rendered.join("\n");
  });

  return {
    dir: {
      input: "content",
      includes: "../_includes",
      data: "../_data",
      output: "_site"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
};
