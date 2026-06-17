export default function(eleventyConfig) {
  // Copies the entire 'css' folder to the output directory
  eleventyConfig.addPassthroughCopy("css");
};