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
      },
      dist: {
        options: {
          paths: ["./", "./src"]
        },
        files: {
          "./dist/pain.less.css" : "./src/dist.less"
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
      },
      dist: {
        src: "./dist/pain.less.css"
      }
    },
    cssmin: {
      dist: {
        files: {
          './dist/pain.less.min.css' : ['./dist/pain.less.css']
        }
      }
    },
    watch: {
      options: {
        livereload: true,
        spawn: false
      },
      less: {
        files: ["./src/**/*.less", "./demo.less"],
        tasks: ["less", "autoprefixer"],
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
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('dist', ['less:dist', 'autoprefixer:dist', 'cssmin:dist']);
  grunt.registerTask('default', ['connect', 'watch']);


};
