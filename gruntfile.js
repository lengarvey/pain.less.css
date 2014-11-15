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
        src: "./public/painless-demo.css"
      }
    },
    watch: {
      options: {
        livereload: true,
        spawn: false
      },
      less: {
        files: ["./src/**/*.less"],
        tasks: ["less", "lesslint", "autoprefixer"],
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
  grunt.loadNpmTasks('grunt-lesslint');
  grunt.loadNpmTasks('grunt-autoprefixer');

  grunt.registerTask('default', ['connect', 'watch']);
};
