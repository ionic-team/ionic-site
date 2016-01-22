var gulp        = require('gulp');
var $           = require('gulp-load-plugins')();
var browserSync = require('browser-sync');
var concat      = require('gulp-concat');
var cp          = require('child_process');
var footer      = require('gulp-footer');
var header      = require('gulp-header');
var minifyCss   = require('gulp-minify-css');
var ngmin       = require('gulp-ngmin');
var pagespeed   = require('psi');
var pkg         = require('./package.json');
var prefix      = require('gulp-autoprefixer');
var rename      = require('gulp-rename');
var sass        = require('gulp-sass');
var shell       = require('gulp-shell');
var uglify      = require('gulp-uglify');

var messages = {
  jekyllBuild: '<span style="color: grey">Running:</span> $ jekyll build'
};

var AUTOPREFIXER_BROWSERS = [
  'ie >= 9',
  'ie_mob >= 9',
  'ff >= 30',
  'chrome >= 34',
  'safari >= 7',
  'opera >= 23',
  'ios >= 7',
  'android >= 4.4',
  'bb >= 10'
];
var closureStart =
  '/*!\n' +
  ' * Ionic IO\n' +
  ' * Copyright ' + new Date().getYear() + ' Drifty Co. http://drifty.com/\n' +
  ' */\n' +
  '(function() {\n';
var closureEnd = '\n})();\n';
var version = pkg.version;

gulp.task('styles:v2', function() {
  // For best performance, don't add Sass partials to `gulp.src`
  return gulp.src('_scss/v2.scss')
    // .pipe($.sourcemaps.init())
    .pipe(sass({
      precision: 10,
      onError: console.error.bind(console, 'Sass error:')
    }))
    .pipe($.autoprefixer({browsers: AUTOPREFIXER_BROWSERS}))
    //
    // .pipe($.sourcemaps.write())
    .pipe(gulp.dest('./css/'))
    .pipe(gulp.dest('./_site/css/'))

    // .pipe($.sourcemaps.write('./css/'))
    // Concatenate and minify styles
    .pipe(minifyCss({
      keepSpecialComments: 0
    }))
    .pipe(rename({extname: '.min.css'}))
    .pipe(gulp.dest('./css/'))
    .pipe(gulp.dest('./_site/css/'))
    .pipe($.size({title: 'styles'}));
});

gulp.task('styles:v1', function(done) {
  return gulp.src('scss/**/*.scss')
    .pipe(sass({onError: browserSync.notify}))
    .pipe(gulp.dest('./css/'))
    .pipe(gulp.dest('./_site/css/'))
    .pipe(minifyCss({
      keepSpecialComments: 0
    }))
    .pipe(rename({extname: '.min.css'}))
    .pipe(gulp.dest('./css/'))
    .pipe(gulp.dest('./_site/css/'));
});

// Optimize images
gulp.task('images', function() {
  return gulp.src('_img/**/*')
    .pipe($.imagemin({
      progressive: true,
      interlaced: true
    }))
    .pipe(gulp.dest('img'))
    .pipe(gulp.dest('_site/img'))
    .pipe($.size({title: 'images'}));
});

// compress and concat JS
gulp.task('js', function() {
  return gulp.src(['_js/**/*.js'])
    .pipe(concat('ionic-docs.js'))
    .pipe(header(closureStart))
    .pipe(footer(closureEnd))
    .pipe(gulp.dest('js'))
    .pipe(gulp.dest('_site/js'))
    .pipe(uglify())
    .pipe(rename({extname: '.min.js'}))
    .pipe(gulp.dest('js'))
    .pipe(gulp.dest('_site/js'))
    .pipe($.size({title: 'js'}));
});

/**
 * Build the Jekyll Site
 */
gulp.task('jekyll-build', ['cli-docs'], function(done) {
  browserSync.notify(messages.jekyllBuild);
  return cp.spawn('jekyll',
                  ['build', '-I', '--config', '_config_development.yml'],
                  {stdio: 'inherit'})
           .on('close', done);
});

/**
 * Run Generate linkchecker page
 */
gulp.task('linkchecker', ['build'],
  shell.task('_scripts/linkchecker.sh',{verbose: true})
);

/**
 * Rebuild Jekyll & do page reload
 */
gulp.task('jekyll-rebuild', ['jekyll-build'], function() {
  browserSync.reload();
});

/**
 * Wait for jekyll-build, then launch the Server
 */
gulp.task('server', ['server:stylesv1', 'server:stylesv2', 'images',
                     'jekyll-build'], function() {
  browserSync({
    server: {
      baseDir: '_site'
    }
  });
});

gulp.task('server:stylesv1', ['styles:v1'], function() {
  browserSync.reload();
});
gulp.task('server:stylesv2', ['styles:v2'], function() {
  browserSync.reload();
});
gulp.task('server:jekyll', ['jekyll-build'], function() {
  browserSync.reload();
});
gulp.task('server:images', ['images'], function() {
  browserSync.reload();
});
gulp.task('server:js', ['js'], function() {
  browserSync.reload();
});

gulp.task('watch', ['server'],function() {
  gulp.watch('scss/**.scss', ['server:stylesv1']);
  gulp.watch(['_scss/*.scss', '_scss/docs/*.scss'], ['server:stylesv2']);
  gulp.watch(['_img/*','_img/*/*'], ['server:images']);
  gulp.watch(['_js/**/*.js', 'submit-issue/*/*.js'], ['server:js']);
  gulp.watch(['*.html', 'submit-issue/*.html', '_layouts/*', '_layouts/*/*',
              '_posts/*', '_includes/*/*', 'docs/v2/**/*.{md,html,js,css}',
              '!docs/v2/2*', '!docs/v2/nightly'],
             ['server:jekyll']);

});

gulp.task('cli-docs', function() {
  try {
    var fs = require('fs');
    var cliTasks = JSON.stringify(require('../ionic-cli/lib/tasks/cliTasks'));
    fs.writeFileSync('_data/cliData.json', cliTasks);
  } catch (e) {
    console.error('Cannot find module cliTasks, please make sure the ionic-' +
                  'cli repo is cloned locally. ionic-site and ionic-cli ' +
                  'should be sibling directories.');
  }
});

gulp.task('build', ['styles:v1', 'styles:v2', 'jekyll-build', 'images', 'js']);
gulp.task('default', ['build']);
