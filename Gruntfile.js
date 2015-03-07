module.exports = function (grunt) {
	
	// Within this function we can initialize our configuration object
	grunt.initConfig({

	});

	// We have to load in the Grunt plugin we need.
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-concat');

	// this would be run by typing "grunt test" on the command line
	grunt.registerTask('test',[]);

	// the default task can be run by typing "grunt" on the command line
	grunt.registerTask('default',['jshint', 'concat', 'uglify']);

};