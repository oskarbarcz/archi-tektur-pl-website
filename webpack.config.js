var Encore = require('@symfony/webpack-encore');
var dotenv = require('dotenv');

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
  .configureDefinePlugin(options => {
    let env = dotenv.config();
    console.log(env);

    if (Encore.isProduction()) {
      env = dotenv.config({
        path: process.cwd() + '/.env.prod',
      });
    } else {
      env = dotenv.config({
        path: process.cwd() + '/.env.dev',
      });
    }

    if (env.error) {
      throw env.error;
    }

    options['process.env'].DOMAIN_PATH = JSON.stringify(env.parsed.DOMAIN_PATH);
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
