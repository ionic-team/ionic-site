var babel = require('gulp-babel');


module.exports = function(gulp, flags) {

  gulp.task('demos', function(){
    return gulp.src([
        '../demos/**',
      ])
      .pipe(babel)
      .pipe(gulp.dest('content/test'));
  });

}
