module.exports = function(grunt) {
    'use strict';

    grunt.initConfig({
        // Before generating any new files, remove any previously-created files.
        clean: {
            all: ['out'],
        },

        htmlangularPrepare: {
            src: ['tests/**/*.js']
        },

        htmlangular: {
            options: {
                reportpath: 'out/results.json'
            },
            src: ['tests/**/*.html']
        },

        nodeunit: {
            all: ['tests/**/*.test.js']
        }
    });

    // Actually load this plugin's task.
    grunt.loadTasks('tasks');

    // Load all required grunt tasks.
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    /*
     * $ grunt test
     *
     * task cleans folder then runs nodeunit
     * (which internally triggers ngHtml tasks)
     */
    grunt.registerTask('test', ['clean', 'nodeunit', 'clean']);
};