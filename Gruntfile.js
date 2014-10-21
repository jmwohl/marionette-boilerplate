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
		}
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-requirejs');
	grunt.loadNpmTasks('grunt-bower-requirejs');

	grunt.registerTask('default', ['jshint']);
}

