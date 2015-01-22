'use strict';
module.exports = function(grunt) {
	require('load-grunt-tasks')(grunt);
	grunt.initConfig({
		sass: {
			build: {
				files: {
					'dist/main.css': [
						'assets/styles/main.scss'
					]
				}
			}
		}
	});
	grunt.registerTask('build', [
		'sass:build'
	]);
}