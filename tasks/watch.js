'use strict';


module.exports = function watch(grunt) {

    grunt.loadNpmTasks('grunt-contrib-livereload');
    grunt.loadNpmTasks('grunt-contrib-watch');

    return {
        jade: {
            files: ['views/*.jade'],
            options: {livereload: true}
        },
        css: {
            files: ['public/stylesheets/*.css'],
            options: {livereload: true}
        },
        js: {
            files: ['public/javascripts/*.js'],
            options: {livereload: true}
        },
        less: {
            files: ['public/stylesheets/*.less'],
            options: {livereload: false},
            tasks: ['less:main']
        }
    };

};

