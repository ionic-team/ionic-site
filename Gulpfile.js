const gulp         = require('gulp');
const $            = require('gulp-load-plugins')();
const browserSync  = require('browser-sync');
const cachebust    = require('gulp-cache-bust');
const cleanCSS     = require('gulp-clean-css');
const concat       = require('gulp-concat');
const cp           = require('child_process');
const del          = require('del');
const es           = require('event-stream');
const footer       = require('gulp-footer');
const header       = require('gulp-header');
const lib          = require('./assets/3rd-party-libs.json');
const minifyCss    = require('gulp-minify-css');
const pkg          = require('./package.json');
const prefix       = require('gulp-autoprefixer');
const rename       = require('gulp-rename');
const runSequence  = require('run-sequence');
const sass         = require('gulp-sass');
const server       = require('gulp-develop-server');
const shell        = require('gulp-shell');
const sitemappings = require('./scripts/sitemappings.json');
const uglify       = require('gulp-uglify');

var bustingCache = false;


var AUTOPREFIXER_BROWSERS = [
  'ie >= 10',
  'ff >= 45',
  'chrome >= 54',
  'safari >= 9',
  'opera >= 23',
  'ios >= 9',
  'android >= 4.4'
];
var closureStart =
  '/*!\n' +
  ' * Ionic \n' +
  ' * Copyright 2015-present Drifty Co.\n' +
  ' */\n' +
  '(function() {\n';
var closureEnd = '\n})();\n';
var version = pkg.version;

function bustCache() {

  function cacheBust(path, fileName) {
    return gulp.src(path + fileName)
      .pipe(cachebust({
        basePath: 'dist'
      }))
      .pipe(rename({extname: '.prod.html'}))
      .pipe(gulp.dest('./' + path));
  }

  var bustArray = function() {
    return [
      cacheBust('server/pages/_includes/', 'head.html'),
      cacheBust('server/pages/_includes/', 'scripts.html'),
    ];
  };

  return es.concat(bustArray());
}

function bustCacheAndReload(done) {
  bustCache().on('end', function() {
    done();
    browserSync.reload();
    // apply the template change in the background
    // gulp.start('jekyll-build.incremental');
  });
}

function restartAndReload(done) {
  server.restart(function(err) {
    if (!err) {
      done();
      browserSync.reload();
    }
  });
}

function justReload(done) {
  // server.restart(function(err) {
    // if (!err) {
      done();
      browserSync.reload();
    // }
  // });
}

gulp.task('styles:others', function() {
  // For best performance, don't add Sass partials to `gulp.src`
  return gulp.src([
    'assets/scss/**/*.scss',
    '!assets/scss/styles.scss'
  ])
    .pipe($.sourcemaps.init())
    .pipe(sass({
      precision: 10,
      onError: console.error.bind(console, 'Sass error:')
    }))
    .pipe(prefix({browsers: AUTOPREFIXER_BROWSERS}))
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest('dist/css/'))
    // Concatenate and minify styles
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(rename({extname: '.min.css'}))
    .pipe(gulp.dest('dist/css/'))
    .pipe($.size({title: 'styles'}));
});

gulp.task('styles:v2', function() {
  // For best performance, don't add Sass partials to `gulp.src`
  return  gulp.src(
    ['assets/scss/styles.scss'].concat(lib.css)
  ) .pipe($.sourcemaps.init())
    .pipe(sass({
      precision: 10,
      onError: console.error.bind(console, 'Sass error:')
    }))
    .pipe(prefix({browsers: AUTOPREFIXER_BROWSERS}))
    .pipe(concat('styles.css'))
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest('dist/css/'))
    // Concatenate and minify styles
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(rename({extname: '.min.css'}))
    .pipe(gulp.dest('dist/css/'))
    .pipe($.size({title: 'styles'}));
});

gulp.task('styles:v1', function() {
  return gulp.src('content/scss/**/*.scss')
    .pipe(sass({onError: browserSync.notify}))
    .pipe(prefix({browsers: AUTOPREFIXER_BROWSERS}))
    .pipe(gulp.dest('dist/css/'))
    .pipe(minifyCss({
      keepSpecialComments: 0
    }))
    .pipe(rename({extname: '.min.css'}))
    .pipe(gulp.dest('dist/css/'));
});

// compress and concat JS
gulp.task('js', function() {
  return gulp.src(lib.js.concat(['assets/js/**/*.js']))
    .pipe($.sourcemaps.init())
    .pipe(concat('ionic-site.js', {newLine: ';'}))
    .pipe(header(closureStart))
    .pipe(footer(closureEnd))
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest('dist/js'))
    .pipe(uglify())
    .pipe(rename({extname: '.min.js'}))
    .pipe(gulp.dest('dist/js'))
    .pipe($.size({title: 'js'}));
});



gulp.task('stencil', function(done) {
  return cp.spawn('node_modules/.bin/stencil',
    ['build'],
    {
      cwd: process.cwd(),
      env: {
          PATH: process.env.PATH
      },
      stdio: 'inherit'
    }
  )
  .on('close', async () => {

    done();
  }).on('error', function(err) {
    console.log(err)
    throw err; 
  });
});

gulp.task('stencil:clean', function(done) {
  return runSequence('stencil', 'js', done);
})

/**
 * Run Generate linkchecker page
 */
gulp.task('linkchecker', ['build'],
  shell.task('_scripts/linkchecker.sh', {verbose: true})
);


gulp.task('server-listen', function() {
  return server.listen({'path': './server.js', 'execArgv': ['--inspect']},
  function(error) {
    if (!error) {
      browserSync({'proxy': 'http://localhost:3000', 'port': 3003});
    }
  });
});

/**
 * Wait for jekyll-build, then launch the Server
 */
gulp.task('server', ['build'], function() {
  return runSequence('server-listen');
});

gulp.task('server:server', restartAndReload);

gulp.task('server:stylesv1', ['styles:v1'], justReload);
gulp.task('server:stylesv2', ['styles:v2'], justReload);
gulp.task('server:others', ['styles:others'], justReload);
gulp.task('server:stencil', ['stencil'], justReload);
gulp.task('server:js', ['js'], justReload);

gulp.task('watch.max', ['server'], function() {
  gulp.watch(['server.js','server/**/*'], ['server:server']);
  gulp.watch('content/scss/**.scss', ['server:stylesv1']);
  gulp.watch(['assets/scss/**/_*.scss', 'assets/scss/styles.scss'],
    ['server:stylesv2']);
  gulp.watch(['assets/scss/**/*.scss', '!assets/scss/styles.scss',
    '!assets/scss/**/_*.scss'], ['server:others']);
  gulp.watch(['assets/js/**/*.js'], ['server:js']);
});

gulp.task('watch', ['server'], function() {
  gulp.watch(['server.js','server/**/*'], ['server:server']);
  gulp.watch(['assets/scss/**/_*.scss', 'assets/scss/styles.scss'],
    ['server:stylesv2']);
  gulp.watch(['assets/scss/**/*.scss', '!assets/scss/styles.scss'], ['server:others']);
  gulp.watch(['assets/js/**/*.js'], ['server:js']);
  gulp.watch(['assets/stencil/**/*.{ts,tsx,scss}', '!assets/stencil/components.d.ts'], 
    ['server:stencil']);
});

gulp.task('sitemap', function () {
  gulp.src([
    'server/pages/**/*.html',
    '!server/pages/_*/**/*'
  ], {
    read: false
  })
  .pipe($.sitemap({
    siteUrl: 'https://www.ionicframework.com',
     getLoc: function(siteUrl, loc, entry) {
      return loc.replace(/\.\w+$/, '').replace(/\/$/, '').replace(/(.*)\/index$/, '$1');
    },
    mappings: sitemappings,
    // verbose: true,
    lastmod: false
  }))
  .pipe(gulp.dest('dist/'));
});
});

gulp.task('build', ['build-prep'], function(done) {
  // runSequence('jekyll-build', function() {
    done();
  // })
});

gulp.task('build.clean', ['build-prep'], function(done) {
  // runSequence('jekyll-build.clean', function() {
    done();
  // });
});

gulp.task('slug.prep', function () {
  return del(['assets']);
});

gulp.task(
  'build-prep',
  [
    'stencil:clean',
    'styles:v1',
    'styles:v2',
    'styles:others',
  ],
  bustCache
);

gulp.task('default', ['build']);
