'use strict';


module.exports = function (grunt) {

    require('grunt-config-dir')(grunt, {
        configDir: require('path').join(__dirname, 'tasks')
    });

    // App tasks
    grunt.registerTask('test', [ 'mochacli' ]);
    grunt.registerTask('default',['watch']);
    grunt.registerTask('lessc',['less:main']);

};
