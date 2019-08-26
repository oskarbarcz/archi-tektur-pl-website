var Encore = require('@symfony/webpack-encore');

Encore
  .setOutputPath('public/build/')
  .setPublicPath('/build')
  .addEntry('app', './assets/ts/app.ts')
  .enableSingleRuntimeChunk()
  .cleanupOutputBeforeBuild()
  .enableBuildNotifications()
  .enableSourceMaps(!Encore.isProduction())
  .enableVersioning(Encore.isProduction())
  .configureBabel(() => {}, {
    useBuiltIns: 'usage',
    corejs: 3,
  })
  .enableSassLoader()
  .enablePostCssLoader((options) => {
    options.config = {
      path: 'pos',
    };
  })
  .enableTypeScriptLoader()
  .enableIntegrityHashes();

module.exports = Encore.getWebpackConfig();
