require('coffee-script/register');

exports.config = {
  baseUrl: 'http://localhost:9000/',

  // use `npm run e2e`
  specs: [
    'e2e/**/*.coffee'
  ],
  exclude: [],

  framework: 'jasmine',

  allScriptsTimeout: 110000,

  jasmineNodeOpts: {
    showTiming: true,
    showColors: true,
    isVerbose: true,
    includeStackTrace: false,
    defaultTimeoutInterval: 400000
  },
  directConnect: true,

  capabilities: {
    'browserName': 'chrome',
    'chromeOptions': {
      'args': ['show-fps-counter=true']
    }
  },

  onPrepare: function() {
    require('jasmine-given');
    require('babel-register')({
      plugins: ['transform-decorators-legacy'],
      presets: ['es2015-loose-native-modules', 'stage-1'],
    });
  },

  plugins: [{
    package: 'aurelia-tools/plugins/protractor'
  }]
};
