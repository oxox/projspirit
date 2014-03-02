module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    meta: {
        file: "proj",
        banner: '/*! <%= pkg.name %> v<%= pkg.version %> - <%= grunt.template.today("m/d/yyyy") %>\n' +
                '   <%= pkg.homepage %>\n' +
                '   Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>' +
                ' - Licensed <%= _.pluck(pkg.license, "type").join(", ") %> */\n'
    },

    resources: {
        js: [
            'js/lib/jquery.min.js',
            'js/lib/jquery.fanmenu.js',
            'js/lib/bootstrap.min.js',
            'js/lib/date.js',
            'js/lib/mustache.js',
            'js/lib/j.core.js',
            'js/lib/j.evalTpl.js',
            'js/lib/j.endsWidth.js',
            'js/data.js',
            'js/base.js',
            'js/alert.js',
            'js/data.Setting.js',
            'js/data.Workspace.js',
            'js/data.dir.js',
            'js/data.Project.js',
            'js/editor.project.js',
            'js/jsftp.js',
            'js/svn.js',
            'js/default.js',
            'js/default.dragdrop.js',
            'js/file.js',
            'js/mail.js'
          ],
      css:[
          'css/bootstrap.min.css',
          'css/bootstrap-responsive.min.css',
          'css/style.css',
          'css/index.css'
      ]
    },

    concat: {
      options:{
        seperator:';'
      },
      js:{
          src: ['<%= meta.banner%>', '<%= resources.js%>'],
          dest: 'js/<%= meta.file%>.debug.js'
      }
    },
    concat_css:{
      index:{
        src:['<%= meta.banner%>', '<%= resources.css%>'],
        dest:'css/<%= meta.file%>.debug.css'
      }
    },
    cssmin:{
      options: {
        // the banner is inserted at the top of the output
        banner: '<%=meta.banner%>'
      },
      index:{
        src:'<%= concat_css.index.dest %>',
        dest:'css/<%=meta.file%>.min.css'
      }
    },
    uglify: {
      options: {
        // the banner is inserted at the top of the output
        banner: '<%=meta.banner%>'
      },
      dist_js: {
        files: {
          'js/<%=meta.file%>.min.js': ['<%= concat.js.dest %>']
        }
      }
    },
    jshint: {
      // define the files to lint
      files: ['Gruntfile.js', 'js/*.js'],
      // configure JSHint (documented at http://www.jshint.com/docs/)
      options: {
          // more options here if you want to override JSHint defaults
        globals: {
          Zepto: true,
          console: true,
          module: true
        }
      }
    },
    watch: {
      js:{
        files:['<%=resources.js%>'],
        tasks:['concat:js','uglify:dist_js']
      },
      css:{
        files:['<%=resources.css%>'],
        tasks:['concat_css:index','cssmin:index']
      },
    }
  });

  grunt.event.on('watch', function(action, filepath, target) {
    grunt.log.writeln(target + ': ' + filepath + ' has ' + action);
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-concat-css');
  grunt.loadNpmTasks('grunt-css');

  // Default task.
  grunt.registerTask('default', ['concat','concat_css','cssmin', 'uglify']);
  // js task
  grunt.registerTask('js',['concat:js']);

};
