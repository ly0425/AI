// Change theme plugin

import MergeLessPlugin from 'antd-pro-merge-less';
import AntDesignThemePlugin from 'antd-pro-theme-webpack-plugin';
import path from 'path';

export default config => {
  // 将所有 less 合并为一个供 themePlugin使用
  const outFile = path.join(__dirname, '../.temp/ant-design-pro.less');
  const stylesDir = path.join(__dirname, '../src/');

  config.plugin('merge-less').use(MergeLessPlugin, [
    {
      stylesDir,
      outFile,
    },
  ]);

  config.plugin('ant-design-theme').use(AntDesignThemePlugin, [
    {
      antDir: path.join(__dirname, '../node_modules/antd'),
      stylesDir,
      varFile: path.join(__dirname, '../node_modules/antd/lib/style/themes/default.less'),
      mainLessFile: outFile, //     themeVariables: ['@primary-color'],
      indexFileName: 'index.html',
    },
  ]);
  // css的修改
  config.plugin('extract-css').use(require('mini-css-extract-plugin'), [
    {
      // filename: `[name].css`,
      filename: "vadp-ai.css",
      chunkFilename: `[name].[contenthash:8].chunk.css`,
    },
  ]);
  //js的修改
  config.output.filename('vadp-ai.js');
  config.output.library('vadpAi');
};
