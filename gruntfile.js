module.exports = function(grunt) {

  grunt.initConfig({
    less: {
      development: {
        options: {
          paths: ["./src"]
        },
        files: {
          "./public/painless-demo.css": "./src/painless-demo.less"
        }
      }
    },
    watch: {
      options: {
        livereload: true,
        spawn: false
      },
      less: {
        files: ["./src/**/*.less"],
        tasks: ["less"],
      },
      html: {
        files: ["./public/**/*"]
      }
    },
    connect: {
      server: {
        options: {
          base: "./public",
          // keepalive: true,
          livereload: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.registerTask('default', ['connect', 'watch']);
};
