// Karma configuration
// Generated on Wed Aug 17 2016 17:59:45 GMT+0200 (CEST)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['source-map-support', 'mocha'],


    // list of files / patterns to load in the browser
    files: [
      'test/**/*Spec.ts'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'test/**/*Spec.ts': ['webpack']
    },


    webpack: {
      devtool: 'inline-source-map',
      resolve: {
        extensions: ['', '.ts', '.js']
      },
      module: {
        loaders: [
          { test: /\.ts$/, exclude: /node_modules/, loader: 'ts-loader', query: { compilerOptions: { inlineSourceMap: true }} }
        ],
        postLoaders: [
          { test: /\.ts$/, include: /src/, loader: 'istanbul-instrumenter' }
        ]
      }
    },

    webpackMiddleware: {
      noInfo: true
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'coverage'],


    coverageReporter: {
      dir: 'coverage',
      reporters: [
        {
          type: 'json',
          subdir: '.',
          file: 'coverage.json'
        }
      ]
    },


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Electron'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
