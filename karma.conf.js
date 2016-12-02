// #docregion
module.exports = function(config) {

  // var appBase    = 'app/';       // transpiled app JS and map files
  // var appSrcBase = 'app/';       // app source TS files
  // var appAssets  = 'base/app/'; // component assets fetched by Angular's compiler
  //
  // var testBase    = 'testing/';       // transpiled test JS and map files
  // var testSrcBase = 'testing/';       // test source TS files

  config.set({
    basePath: '',
    frameworks: ['jasmine', 'angular-cli'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-remap-istanbul'),
      require('angular-cli/plugins/karma')
    ],
    files: [
      {pattern: './src/test.ts', watched: false}
    ],

    // files: [
    //   // System.js for module loading
    //   'node_modules/systemjs/dist/system.src.js',
    //
    //   // Polyfills
    //   'node_modules/core-js/client/shim.js',
    //   'node_modules/reflect-metadata/Reflect.js',
    //
    //   // zone.js
    //   'node_modules/zone.js/dist/zone.js',
    //   'node_modules/zone.js/dist/long-stack-trace-zone.js',
    //   'node_modules/zone.js/dist/proxy.js',
    //   'node_modules/zone.js/dist/sync-test.js',
    //   'node_modules/zone.js/dist/jasmine-patch.js',
    //   'node_modules/zone.js/dist/async-test.js',
    //   'node_modules/zone.js/dist/fake-async-test.js',
    //
    //   // RxJs
    //   { pattern: 'node_modules/rxjs/**/*.js', included: false, watched: false },
    //   { pattern: 'node_modules/rxjs/**/*.js.map', included: false, watched: false },
    //
    //   // Paths loaded via module imports:
    //   // Angular itself
    //   { pattern: 'node_modules/@angular/**/*.js', included: false, watched: false },
    //   { pattern: 'node_modules/@angular/**/*.js.map', included: false, watched: false },
    //
    //   { pattern: 'systemjs.config.js', included: false, watched: false },
    //   { pattern: 'systemjs.config.extras.js', included: false, watched: false },
    //   'karma-test-shim.js',
    //
    //   // transpiled application & spec code paths loaded via module imports
    //   { pattern: appBase + '**/*.js', included: false, watched: true },
    //   { pattern: testBase + '**/*.js', included: false, watched: true },
    //
    //
    //   // Asset (HTML & CSS) paths loaded via Angular's component compiler
    //   // (these paths need to be rewritten, see proxies section)
    //   { pattern: appBase + '**/*.html', included: false, watched: true },
    //   { pattern: appBase + '**/*.css', included: false, watched: true },
    //
    //   // Paths for debugging with source maps in dev tools
    //   { pattern: appSrcBase + '**/*.ts', included: false, watched: false },
    //   { pattern: appBase + '**/*.js.map', included: false, watched: false },
    //   { pattern: testSrcBase + '**/*.ts', included: false, watched: false },
    //   { pattern: testBase + '**/*.js.map', included: false, watched: false }
    // ],

    // // Proxied base paths for loading assets
    // proxies: {
    //   // required for component assets fetched by Angular's compiler
    //   "/app/": appAssets
    // },
    //
    // exclude: [],
    preprocessors: {
      './src/test.ts': ['angular-cli']
    },
    mime: {
      'text/x-typescript': ['ts', 'tsx']
    },
    remapIstanbulReporter: {
      reports: {
        html: 'coverage',
        lcovonly: './coverage/coverage.lcov'
      }
    },
    angularCli: {
      config: './angular-cli.json',
      environment: 'dev'
    },
    reporters: config.angularCli && config.angularCli.codeCoverage
      ? ['progress', 'karma-remap-istanbul']
      : ['progress'],

    // // HtmlReporter configuration
    // htmlReporter: {
    //   // Open this file to see results in browser
    //   outputFile: '_test-output/tests.html',
    //
    //   // Optional
    //   pageTitle: 'Unit Tests',
    //   subPageTitle: __dirname
    // },

    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false
  })
}
