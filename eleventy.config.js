module.exports = function (eleventyConfig) {
	eleventyConfig.addNunjucksFilter("strip", function (str) {
		if (!str) return str;
		return str.replace(/(\r\n|\n|\r)/gm, ' ');
	});
	eleventyConfig.addNunjucksFilter('limit', function(arr, limit) {
		if (!Array.isArray(arr)) return arr;
		return arr.slice(0, limit);
	  });
	eleventyConfig.addPassthroughCopy("css");
	eleventyConfig.addPassthroughCopy("assets");
	// Run Eleventy when these files change:
	// https://www.11ty.dev/docs/watch-serve/#add-your-own-watch-targets

	// Watch content images for the image pipeline.
	eleventyConfig.addWatchTarget("content/**/*.{md,svg,webp,png,jpeg}");
	return {
		passthroughFileCopy: true,
		// Control which files Eleventy will process
		// e.g.: *.md, *.njk, *.html, *.liquid
		templateFormats: [
			"md",
			"njk",
			"html",
			"liquid",
		],

		// Pre-process *.md files with: (default: `liquid`)
		markdownTemplateEngine: "njk",

		// Pre-process *.html files with: (default: `liquid`)
		htmlTemplateEngine: "njk",

		dir: {
			input: "content",          // default: "."
			includes: "../_includes",  // default: "_includes"
			data: "../_data",          // default: "_data"
			output: "_site"
		},
	};
};
