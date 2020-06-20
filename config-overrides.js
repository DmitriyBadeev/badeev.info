const { override, fixBabelImports, addLessLoader } = require("customize-cra")

module.exports = override(
    fixBabelImports("import", {
        libraryName: "antd",
        libraryDirectory: "es",
        style: true,
    }),
    addLessLoader({
        javascriptEnabled: true,
        modifyVars: {
            "@primary-color": "#407BFF",
            "@link-color": "@heading-color",
            "@link-color-dark": "fade(#fff, 100%)",
            "@link-hover-color": "#407BFF",
            "@font-size-base": "16px",
            "@heading-color": "#222",
            "@text-color": "#333",
            "@ease-base": "cubic-bezier(0,0,0,1)",
        },
    })
)
