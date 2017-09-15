var terminal = require("child_process").exec;

module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            scripts: {
                files: ['build/**/*.spec.js'],
                tasks: ['move'],
                options: {
                    interval: 500
                }
            },
        },
        move: {
            task: {
                src: 'build/**/*.spec.js',
                dest: 'test/unit/'
            }
        },
        clean: {
            compiled: ['build/*', 'test/unit/*'],
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-move');

    // Default task(s).
    grunt.registerTask('default', ['clean', 'watch', 'move']);
};