module.exports = function(grunt) {

  grunt.initConfig({
    less: {
      development: {
        options: {
          paths: ["./", "./src"]
        },
        files: {
          "./demo.css": "./demo.less"
        }
      }
    },
    lesslint: {
      src: ['src/painless.less'],
      options: {
        less: {
          paths: ["./src"]
        },
        imports: ["src/**/*.less"]
      }
    },
    autoprefixer: {
      options: {
        browsers: ["last 2 versions"]
      },
      stuff: {
        src: "./demo.css"
      }
    },
    watch: {
      options: {
        livereload: true,
        spawn: false
      },
      less: {
        files: ["./src/**/*.less", "./demo.less"],
        tasks: ["less", "lesslint", "autoprefixer"],
      },
      html: {
        files: ["./*.html"]
      }
    },
    connect: {
      server: {
        options: {
          base: "./",
          // keepalive: true,
          livereload: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-lesslint');
  grunt.loadNpmTasks('grunt-autoprefixer');

  grunt.registerTask('default', ['connect', 'watch']);
};
