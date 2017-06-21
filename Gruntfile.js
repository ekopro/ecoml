//Стандартный экспорт модуля в nodejs
module.exports = function(grunt) {
  // Инициализация конфига GruntJS
  grunt.initConfig({

    sass: {
  		options: {
  			sourceMap: true
  		},
  		dist: {
  			files: {
  				'./css/style.css' : './sass/index.sass',
  			}
  		}
	  },

    watch: {
      files: ['./sass/_base.sass',
              './sass/_layout.sass',
              './sass/_modules.sass',
              './sass/_state.sass',
              './sass/_utils.sass',
              './sass/_vars.sass',
              './sass/index.sass'
            ],
      tasks: ['sass'],
    },

  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-sass');


  //Эти задания будут выполнятся сразу же когда вы в консоли напечатание grunt, и нажмете Enter
  grunt.registerTask('default', ['sass','watch']);
};
