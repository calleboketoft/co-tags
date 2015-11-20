module.exports = function(config) {
  config.set({

    jspm: {
      config: 'jspm.config.js',
      loadFiles: [
        'test/unit/**/*.ts'
      ],
      serveFiles: [
        'src/co-tags/*.ts'
      ]
    },

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: './',

    frameworks: ['jspm', 'jasmine'],

    reporters: ['progress'],

    port: 9876,

    proxies: {
      '/src/': '/base/src/',
      '/test/': '/base/test/',
      '/jspm_packages/': '/base/jspm_packages/'
    },

    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    browsers: ['Chrome'],

    singleRun: true,

    concurrency: Infinity
  })
}
