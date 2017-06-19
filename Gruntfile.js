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
  				'./css/style.css': './css/style.sass'
  			}
  		}
	  },

    watch: {
      files: ['./css/style.sass'],
      tasks: ['sass'],
    },

  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-sass');


  //Эти задания будут выполнятся сразу же когда вы в консоли напечатание grunt, и нажмете Enter
  grunt.registerTask('default', ['sass','watch']);
};
