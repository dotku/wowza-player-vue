const fs = require("fs");
const Package = require("./package.json");
module.exports = {
  chainWebpack: config => {
    config.plugin('html').tap(args => {
      args[0].title = Package.title
      return args
    })
  }

}