'use strict';


module.exports = function less(grunt) {

    grunt.loadNpmTasks('grunt-contrib-less');

    return {
        main: {
            expand: true,
            strictMath: true,
            cwd: 'public/stylesheets/',
            src: ['*.less'],
            dest: 'public/stylesheets/',
            ext: '.css'
        }
    };
};

