// module.exports = {
//     chainWebpack: (config) => {
//       const svgRule = config.module.rule('svg');
//       inlineSvgRule = config.module.rule('inline-svg');
  
//       svgRule.uses.clear();
  
//       svgRule
//         .use('vue-svg-loader')
//         .loader('vue-svg-loader');

//       inlineSvgRule
//         .test(/inline\.(.*)\.svg/)
//         .use('vue-svg-loader')
//         .loader('vue-svg-loader')
//     },
//   }
module.exports = {
  chainWebpack: config => {
      config.module
          .rule("vue")
          .use("vue-svg-inline-loader")
              .loader("vue-svg-inline-loader")
              .options({ /* ... */ });
  }
};