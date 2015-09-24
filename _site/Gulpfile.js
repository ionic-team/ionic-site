var gulp        = require('gulp');
var concat      = require('gulp-concat');
var sass        = require('gulp-sass');
var minifyCss   = require('gulp-minify-css');
var rename      = require('gulp-rename');
var browserSync = require('browser-sync');
var prefix      = require('gulp-autoprefixer');
var cp          = require('child_process');

var messages = {
    jekyllBuild: '<span style="color: grey">Running:</span> $ jekyll build'
};

var paths = {
  sass: ['scss/**/*.scss']
};

gulp.task('sass', function(done) {
  return gulp.src('./scss/site.scss')
    .pipe(sass({onError: browserSync.notify}))
    .pipe(gulp.dest('./css/'))
    .pipe(gulp.dest('./_site/css/'))
    .pipe(minifyCss({
      keepSpecialComments: 0
    }))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('./css/'))
    .pipe(gulp.dest('./_site/css/'));
});

/**
 * Build the Jekyll Site
 */
gulp.task('jekyll-build', function(done) {
    browserSync.notify(messages.jekyllBuild);
    return cp.spawn('jekyll', ['build'], {stdio: 'inherit'})
        .on('close', done);
});


/**
 * Rebuild Jekyll & do page reload
 */
gulp.task('jekyll-rebuild', ['jekyll-build'], function() {
    browserSync.reload();
});

/**
 * Wait for jekyll-build, then launch the Server
 */
gulp.task('server', ['sass', 'jekyll-build'], function() {
    browserSync({
        server: {
            baseDir: '_site'
        }
    });
});

gulp.task('server:styles', ['sass'], function() {
  browserSync.reload();
});
gulp.task('server:jekyll', ['jekyll-build'], function() {
  browserSync.reload();
});

gulp.task('watch', ['server'],function() {
  gulp.watch('scss/**.scss', ['server:styles']);
  gulp.watch(['*.html', '_layouts/*.html', '_posts/*'], ['server:jekyll']);

});

gulp.task('default', ['sass']);
