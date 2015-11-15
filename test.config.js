System.config({
  transpiler: "typescript",
  packages: {
    'src': {
      defaultExtension: 'ts'
    },
    'test': {
      defaultExtension: 'ts'
    }
  },
  paths: {
    'typescript': 'node_modules/typescript/lib/typescript.js',
    'systemjs': 'node_modules/systemjs/dist/system.js',
    'system-polyfills': 'node_modules/systemjs/dist/system-polyfills.js',
    'es6-module-loader': 'node_modules/es6-module-loader/dist/es6-module-loader.js',
    // load angular manually like this
    'angular2/angular2': 'node_modules/angular2/bundles/angular2.dev.js'
  }
})