module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        jshint: {
            files: ['public/javascripts/**/*.js'],
            options: {
                globals: {
                    jQuery: true,
                    console: true,
                    module: true
                }
            }
        },
        watch: {
            files: ['<%= jshint.files %>'],
            tasks: ['jshint', 'qunit']
        },
        bower: {
            all: {
                rjsConfig: 'public/javascripts/init.js',
                options: {
                    transitive: true
                }
            }
        },
        requirejs: {
            compile: {
                options: {
                    baseUrl: "public/scripts",
                    name: "../bower_components/almond/almond",
                    include: "main",
                    mainConfigFile: "public/scripts/init.js",
                    out: "public/dist/optimized.js"
                }
            }
        },

        // Not sure if we'll need this -- as long as we're compiling, it might not be necessary?
        bowercopy: {
            options: {
                srcPrefix: 'public/bower_components'
            },
            scripts: {
                options: {
                    destPrefix: 'public/scripts/lib'
                },
                files: {
                    'almond/almond.js': 'almond/almond.js'
                }
            }
        }

        // , requirejs: {
        //     dist: {
        //         // Options: https://github.com/jrburke/r.js/blob/master/build/example.build.js
        //         options: {
        //             // `name` and `out` is set by grunt-usemin
        //             baseUrl: 'public/scripts',
        //             optimize: 'none',
        //             paths: {
        //                 'templates': 'public/templates'
        //             },
        //             // TODO: Figure out how to make sourcemaps work with grunt-usemin
        //             // https://github.com/yeoman/grunt-usemin/issues/30
        //             //generateSourceMaps: true,
        //             // required to support SourceMaps
        //             // http://requirejs.org/docs/errors.html#sourcemapcomments
        //             preserveLicenseComments: false,
        //             useStrict: false,
        //             wrap: true,
        //             //uglify2: {} // https://github.com/mishoo/UglifyJS2
        //             pragmasOnSave: {
        //                 //removes Handlebars.Parser code (used to compile template strings) set
        //                 //it to `false` if you need to parse template strings even after build
        //                 excludeHbsParser : true,
        //                 // kills the entire plugin set once it's built.
        //                 excludeHbs: true,
        //                 // removes i18n precompiler, handlebars and json2
        //                 excludeAfterBuild: true
        //             },
        //             out: "public/dist/optimized.js"
        //         }
        //     }
        // }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-bower-requirejs');
    grunt.loadNpmTasks('grunt-bowercopy');

    grunt.registerTask('default', ['jshint']);
}
