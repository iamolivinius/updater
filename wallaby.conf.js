var wallabyWebpack = require('wallaby-webpack');
var wallabyPostprocessor = wallabyWebpack()

module.exports = function (wallaby) {
  return {
    files: [
      { pattern: 'src/**/*.ts', load: false }
    ],

    tests: [
      { pattern: 'test/**/*Spec.ts', load: false }
    ],

    testFramework: 'mocha',

    postprocessor: wallabyPostprocessor,

    setup: function () {
      window.__moduleBundler.loadTests();
    },

    env: {
      kind: 'electron'
    }
  }

}
