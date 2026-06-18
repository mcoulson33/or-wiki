export default function(eleventyConfig) {
  // Copies the entire 'css' folder to the output directory
  eleventyConfig.addPassthroughCopy("css");
};

module.exports = function(eleventyConfig) {
  return {
    dir: {
      input: "src",
      output: "_site"
    }
  };
};
