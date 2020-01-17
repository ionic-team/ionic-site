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
const nodemon      = require('gulp-nodemon');
const path         = require('path');
const pkg          = require('./package.json');
const prefix       = require('gulp-autoprefixer');
const rename       = require('gulp-rename');
const sass         = require('gulp-sass');
const uglify       = require('gulp-uglify');

var closureStart =
  '/*!\n' +
  ' * Ionic \n' +
  ' * Copyright 2015-present Drifty Co.\n' +
  ' */\n' +
  '(function() {\n';
var closureEnd = '\n})();\n';
var version = pkg.version;
let server;

const bustCache = async () => {

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
  server.emit('restart');
  if (typeof done === 'function') {
    done();
  }
  browserSync.reload();
}

function justReload(done) {
  // server.restart(function(err) {
    // if (!err) {
      done();
      browserSync.reload();
    // }
  // });
}

const stylesOthers = () => {
  // For best performance, don't add Sass partials to `gulp.src`
  return gulp.src([
    'assets/scss/**/*.scss',
    '!assets/scss/styles.scss'
  ])
    .pipe($.sourcemaps.init())
    .pipe(sass({
      precision: 10,
      onError: console.error.bind(console, 'Sass error:'),
      includePaths: [path.join(__dirname, 'node_modules')]
    }))
    .pipe(prefix())
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest('dist/css/'))
    // Concatenate and minify styles
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(rename({extname: '.min.css'}))
    .pipe(gulp.dest('dist/css/'))
    .pipe($.size({title: 'styles'}));
};

const stylesMain = () => {
  // For best performance, don't add Sass partials to `gulp.src`
  return  gulp.src(
    ['assets/scss/styles.scss'].concat(lib.css)
  ) .pipe($.sourcemaps.init())
    .pipe(sass({
      precision: 10,
      onError: console.error.bind(console, 'Sass error:'),
      includePaths: [path.join(__dirname, 'node_modules')]
    }))
    .pipe(prefix())
    .pipe(concat('styles.css'))
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest('dist/css/'))
    // Concatenate and minify styles
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(rename({extname: '.min.css'}))
    .pipe(gulp.dest('dist/css/'))
    .pipe($.size({title: 'styles'}));
};

// compress and concat JS
const js = () => {
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
};


const stencil = (done) => {
  return cp.spawn('node_modules/.bin/stencil',
    ['build', process.env.PROD ? '' : '--dev'],
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
};

const serverStart = (done) => {
  server = nodemon({ 
    script: 'server.js',
    watch: 'server',
  }).on('start', () => {
    if (browserSync.active) {
      setTimeout( browserSync.reload, 3050);
    } else {
      // giving the server 2 seconds to start
      setTimeout(done, 2000);
    }
  })
  .on('crash', function() {
    console.error('Application has crashed!\n')
     server.emit('restart', 10)  // restart the server in 10 seconds
  });
};


const slugPrep = () => {
  return del(['assets']);
};

const build = gulp.series(
  gulp.parallel(
    gulp.series(
      stencil,
      js
    ),
    stylesMain,
    stylesOthers
  ),
  bustCache
)

const run = gulp.parallel(
  build, 
  serverStart
)

const watchServer = async () => gulp.watch(['server.js','server/**/*'], restartAndReload);
const watchStylesMain = async () => gulp.watch(['assets/scss/**/_*.scss', 'assets/scss/styles.scss'], gulp.series(stylesMain, justReload))
const watchStylesOthers = async () => gulp.watch(['assets/scss/**/*.scss', '!assets/scss/styles.scss', '!assets/scss/**/_*.scss'], gulp.series(stylesOthers, justReload))
const watchJS = async () => gulp.watch(['assets/js/**/*.js'], gulp.series(js, justReload));
const watchStencil = async () => gulp.watch(['assets/stencil/**/*.{ts,tsx,scss}', '!assets/stencil/components.d.ts'], gulp.series(stencil, justReload));

const watch = gulp.series(
  run,
  // serverStart,
  gulp.parallel(
    watchServer,
    watchStylesMain,
    watchStylesOthers,
    watchJS, 
    watchStencil
  ),
  async () => {
    return browserSync.init({'proxy': 'http://localhost:3000', 'port': 3003})
  }
);


// gulp.task('default', ['build']);

module.exports = {
  build,
  bustCache,
  js,
  run,
  serverStart,
  slugPrep,
  stencil,
  stylesMain,
  stylesOthers,
  watch,
};