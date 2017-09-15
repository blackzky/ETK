var terminal = require("child_process").exec;

module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            scripts: {
                files: ['build/**/*.spec.js'],
                tasks: ['move'],
            }
        },
        move: {
            task: {
                src: 'build/**/*.spec.js',
                dest: 'test/unit/'
            }
        },
        clean: {
            all: ['build/*', 'test/unit/*']
        },

    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-move');

    grunt.registerTask('default', function() {
        // Force task into async mode and grab a handle to the "done" function.
        var done = this.async();

        grunt.log.writeln('Preparing development environment...');

        var commandToBeExecuted = "start npm run t1";
        terminal(commandToBeExecuted, runner);

        setTimeout(function() {
            commandToBeExecuted = "start npm run t2";
            terminal(commandToBeExecuted, runner);

        }, 5000);

        setTimeout(function() {
            commandToBeExecuted = "start npm run t3";
            terminal(commandToBeExecuted, runner);
            grunt.log.writeln('Ready.');
        }, 10000);

        function runner(error, stdout, stderr) {
            grunt.log.writeln('command: ' + commandToBeExecuted);
            if (error) {
                grunt.log.writeln('error: ' + error);
            }

            grunt.log.writeln('stdout: ' + stdout);
            grunt.log.writeln('stderr: ' + stderr);

            done();
        }
    });

};