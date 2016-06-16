// Karma configuration
// Generated on Wed Dec 02 2015 22:57:01 GMT+0100 (Paris, Madrid)

module.exports = function(config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: './',

        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine'],

        // list of files / patterns to load in the browser
        files: [
            // for Travis
            'node_modules/es6-shim/es6-shim.js',
            'node_modules/zone.js/dist/zone.js',
            'node_modules/zone.js/dist/long-stack-trace-zone.js',
            'node_modules/zone.js/dist/jasmine-patch.js',
            'node_modules/systemjs/dist/system.src.js',
            'node_modules/reflect-metadata/Reflect.js',
            'node_modules/crypto-js/crypto-js.js',
            'node_modules/systemjs/dist/system-polyfills.js',

            { pattern: 'node_modules/@angular/**/*.js', included: false, watched: false, served: true },
            { pattern: 'node_modules/rxjs/**/*.js', included: false, watched: false, served: true },
            { pattern: 'node_modules/lodash/**/*.js', included: false, watched: false, served: true },
            { pattern: 'node_modules/reflect-metadata/**/*.js', included: false, watched: false, served: true },
            { pattern: 'node_modules/crypto-js/**/*.js', included: false, watched: false, served: true },
            { pattern: 'node_modules/symbol-observable/**/*.js', included: false, watched: false, served: true },
            { pattern: 'node_modules/systemjs/dist/system-polyfills.js', included: false, watched: false, served: true }, // PhantomJS2 (and possibly others) might require it

            { pattern: 'ng2-formobject.ts', included: false, watched: true }, // source files
            { pattern: 'src/**/*.ts', included: false, watched: true }, // source files
            {pattern: 'lib/**/*.js', included: false, watched: true},  // test again for coverage
           // { pattern: 'test/**/*.ts', included: false, watched: true }, // test files
            'karma-test-shim.js'
        ],

        // list of files to exclude
        exclude: [
            'node_modules/@angular/**/*_spec.js'
        ],

        preprocessors: {
            '**/*.ts': ['typescript'],
            './lib/**/!(*spec).js': ['coverage']
        },

        typescriptPreprocessor: {
            options: require('./tsconfig.json').compilerOptions,
            typings: [
                "typings/index.d.ts",
                'node_modules/reflect-metadata/reflect-metadata.d.ts'
            ],
            // transforming the filenames
            transformPath: function(path) {
                return path.replace(/\.ts$/, '.js');
            }
        },

        // Karma plugins loaded
        plugins: [
            'karma-jasmine',
            'karma-coverage',
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-typescript-preprocessor',
            'karma-spec-reporter',
            'karma-coveralls'
        ],

        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress', 'spec', 'dots', 'coverage', 'coveralls'],

        coverageReporter: {
            reporters:[
                {
                    type: 'json', subdir: '.',
                    file: 'coverage-final.json'
                },
                {
                    type: 'lcov', // lcov or lcovonly are required for generating lcov.info files
                    subdir: '.',
                    dir: 'coverage/'
                }

            ]
        },

        specReporter: {
            maxLogLines: 5,         // limit number of lines logged per test
            suppressErrorSummary: true,  // do not print error summary
            suppressFailed: false,  // do not print information about failed tests
            suppressPassed: false,  // do not print information about passed tests
            suppressSkipped: true,  // do not print information about skipped tests
            showSpecTiming: false // print the time elapsed for each spec
        },


        // web server port
        port: 9876,

        // enable / disable colors in the output (reporters and logs)
        colors: true,

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: false,

        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        // PhantomJS gives error.
        browsers: process.env.TRAVIS ? ['Firefox'] : ['Chrome'],

        // Continuous Integration PhantomJSmode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: true,

        // Concurrency level
        // how many browser should be started simultanous
        concurrency: Infinity
    })
};
