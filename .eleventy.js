module.exports = function(eleventyConfig){
    eleventyConfig.setTemplateFormats([
        "jpg",
        "pdf",
        "md",
        "njk",
        "webp",
        "css"
      ]);

    return {
        markdownTemplateEngine: "njk",    
    dir: {
        layouts: "_layouts"
    },
    }
   
};