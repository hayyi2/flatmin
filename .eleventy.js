module.exports = function (eleventyConfig) {

    eleventyConfig.addGlobalData("baseUrl", function () {
        const deployUrl = "https://hayyi2.github.io/flatmin/"
        return process.env.ELEVENTY_RUN_MODE !== 'serve' ? deployUrl : '/'
    });

    eleventyConfig.setServerOptions({
        liveReload: true,
        domDiff: true,
        port: 8000,
        watch: [
            './dist/assets/css/*.css',
            './dist/assets/js/*.js'
        ],
        showAllHosts: false,
        https: {},
        encoding: "utf-8",
    });

    return {
        dir: {
            input: "./src",
            includes: "./includes",
            layouts: "./layouts",
            data: "./data",
            output: "./dist",
        },
        htmlTemplateEngine: "njk",
        templateFormats: ["njk"],
    }
};
