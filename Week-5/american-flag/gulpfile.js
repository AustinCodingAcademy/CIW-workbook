var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');


gulp.task('style', function(){  /*name of the file is style - to run this go to command line and type in "gulp style"*/
  gulp.src('css/style.css')
  .pipe(autoprefixer())
  .pipe(gulp.dest('build'))
});

gulp.task('watch',function(){    /* to run this go to command line and tye "gulp watch"*/
 gulp.watch('css/style.css',['style']) /*you can have as many files you want. again the name of the file is style*/

});
