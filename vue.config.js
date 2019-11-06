module.exports = {
  // build 引用路径
  publicPath: process.env.NODE_ENV === "production" ? "../dist/" : "./",
  // outputDir: "dist", //和上面的publicPath 相呼应
  productionSourceMap: false, //如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。
  css: {
    loaderOptions: {
      // 给 sass-loader 传递选项
      sass: {
        prependData: `@import "./src/assets/style/main.scss";`
      }
    }
  },
  devServer: {
    open: true,
    hot: true,
    proxy: {
      "/": {
        target: "http://127.0.0.1:8081",
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          "^/": "/"
        }
      }
    }
  }
};
