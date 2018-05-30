const gulp         = require('gulp');
const $            = require('gulp-load-plugins')();
const browserSync  = require('browser-sync');
const cache        = require('gulp-cache');
const cachebust    = require('gulp-cache-bust');
const cleanCSS     = require('gulp-clean-css');
const concat       = require('gulp-concat');
const cp           = require('child_process');
const del          = require('del');
const es           = require('event-stream');
const footer       = require('gulp-footer');
const header       = require('gulp-header');
const lib          = require('./assets/3rd-party-libs.json');
const merge        = require('merge-stream');
const minifyCss    = require('gulp-minify-css');
const pagespeed    = require('psi');
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

var messages = {
  jekyllBuild: '<span style="color: grey">Running:</span> $ jekyll build'
};

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
        basePath: 'content'
      }))
      .pipe(rename({extname: '.prod.html'}))
      .pipe(gulp.dest('./' + path));
  }

  var bustArray = function() {
    return [
      cacheBust('server/pages/_includes/', 'head.html'),
      cacheBust('server/pages/_includes/', 'scripts.html'),
      cacheBust('content/_includes/', 'head_includes.html'),
      cacheBust('content/_includes/fluid/', 'head.html'),
      cacheBust('content/_includes/fluid/', 'footer_tags.html')
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

gulp.task('styles:creator', function() {
  // For best performance, don't add Sass partials to `gulp.src`
  var sassStream =  gulp.src('assets/scss/creator.scss')
    .pipe($.sourcemaps.init())
    .pipe(sass({
      precision: 10,
      onError: console.error.bind(console, 'Sass error:')
    }))
    .pipe($.autoprefixer({browsers: AUTOPREFIXER_BROWSERS}))
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest('content/css/'))
    .pipe(gulp.dest('_site/css/'))
    // Concatenate and minify styles
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(rename({extname: '.min.css'}))
    .pipe(gulp.dest('content/css/'))
    .pipe(gulp.dest('_site/css/'))
    .pipe($.size({title: 'styles'}));
});

gulp.task('styles:v2', function() {
  // For best performance, don't add Sass partials to `gulp.src`
  var sassStream =  gulp.src(
    ['assets/scss/styles.scss'].concat(lib.css)
  ) .pipe($.sourcemaps.init())
    .pipe(sass({
      precision: 10,
      onError: console.error.bind(console, 'Sass error:')
    }))
    .pipe($.autoprefixer({browsers: AUTOPREFIXER_BROWSERS}))
    .pipe(concat('styles.css'))
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest('content/css/'))
    .pipe(gulp.dest('_site/css/'))
    // Concatenate and minify styles
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(rename({extname: '.min.css'}))
    .pipe(gulp.dest('content/css/'))
    .pipe(gulp.dest('_site/css/'))
    .pipe($.size({title: 'styles'}));
});

gulp.task('styles:v1', function() {
  return gulp.src('content/scss/**/*.scss')
    .pipe(sass({onError: browserSync.notify}))
    .pipe($.autoprefixer({browsers: AUTOPREFIXER_BROWSERS}))
    .pipe(gulp.dest('content/css/'))
    .pipe(gulp.dest('_site/css/'))
    .pipe(minifyCss({
      keepSpecialComments: 0
    }))
    .pipe(rename({extname: '.min.css'}))
    .pipe(gulp.dest('content/css/'))
    .pipe(gulp.dest('_site/css/'));
});

// compress and concat JS
gulp.task('js', function() {
  return gulp.src(lib.js.concat(['assets/js/**/*.js']))
    .pipe($.sourcemaps.init())
    .pipe(concat('ionic-site.js', {newLine: ';'}))
    .pipe(header(closureStart))
    .pipe(footer(closureEnd))
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest('content/js'))
    .pipe(gulp.dest('_site/js'))
    .pipe(uglify())
    .pipe(rename({extname: '.min.js'}))
    .pipe(gulp.dest('content/js'))
    .pipe(gulp.dest('_site/js'))
    .pipe($.size({title: 'js'}));
});

/**
 * Build the Jekyll Site
 */
gulp.task('jekyll-build', [], function(done) {
  browserSync.notify(messages.jekyllBuild);
  return cp.spawn('bundle',
    ['exec', 'jekyll', 'build', '-I', '--config', '_config.yml'],
    {stdio: 'inherit'})
  .on('close', function() {
    done();
  }).on('error', function(err) {throw err; });
});

gulp.task('jekyll-build.clean', [], function(done) {
  browserSync.notify(messages.jekyllBuild);
  return cp.spawn('bundle',
    ['exec', 'jekyll', 'build', '-I', '--config', '_config.yml'],
    {stdio: 'inherit'})
  .on('close', function() {
    done();
  }).on('error', function(err) {throw err; });
});

/**
 * Run Generate linkchecker page
 */
gulp.task('linkchecker', ['build'],
  shell.task('_scripts/linkchecker.sh', {verbose: true})
);

/**
 * Rebuild Jekyll & do page reload
 */
gulp.task('jekyll-rebuild', ['jekyll-build'], function() {
  browserSync.reload();
});

gulp.task('server-listen', function() {
  return server.listen({'path': './server.js', 'execArgv': ['--harmony']},
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

gulp.task('server:server', function() {
  server.restart(function(err) {
    if (!err) {
      browserSync.reload();
    }
  });
});

gulp.task('server:ionicons', ['ionicons'], bustCacheAndReload);
gulp.task('server:stylesv1', ['styles:v1'], bustCacheAndReload);
gulp.task('server:stylesv2', ['styles:v2'], bustCacheAndReload);
gulp.task('server:creator', ['styles:creator'], bustCacheAndReload);

gulp.task('server:js', ['js'], bustCacheAndReload);

gulp.task('watch.max', ['server'], function() {
  gulp.watch(['server.js','server/**/*'], ['server:server']);
  gulp.watch('content/scss/**.scss', ['server:stylesv1']);
  gulp.watch(['assets/scss/**/*.scss'], ['server:stylesv2']);
  gulp.watch(['assets/scss/creator.scss'], ['server:creator']);
  gulp.watch(['assets/js/**/*.js', 'submit-issue/*/*.js'], ['server:js']);
  gulp.watch(['content/**/*.{md,html}','content/docs/**/*.{js,css,json}',
  '!content/v1/**/*.*', '!content/2.*/**/*.*', '!content/3.{0,1,2,3,4}.*/**/*.*',
  '!content/_includes/head_includes.*', '!content/_includes/fluid/head.*',
  '!content/_includes/fluid/footer_tags.*'], ['jekyll-rebuild']);
});

gulp.task('watch', ['server'], function() {
  gulp.watch(['server.js','server/**/*'], ['server:server']);
  gulp.watch(['assets/js/**/*.js'], ['server:js']);
  gulp.watch(['assets/scss/**/*.scss'], ['server:stylesv2']);
  gulp.watch(['assets/js/**/*.js', 'submit-issue/*/*.js'], ['server:js']);
  gulp.watch(['content/_layouts/*/*','content/_includes/**/*',
              'content/docs/pro/**/*.{md,html}'], ['jekyll-rebuild']);
});

gulp.task('sitemap', function () {
  gulp.src([
    'server/pages/**/*.html',
    '!server/pages/_*/**/*',
    'content/**/*.{html,md}',
    '!content/docs/{demos,dist}/**/*',
    '!content/{_includes,_layouts}/**/*',
    '!content/present-ionic/slides/**/*'
  ], {
    read: false
  })
  .pipe($.sitemap({
    siteUrl: 'https://www.ionicframework.com',
     getLoc: function(siteUrl, loc, entry) {
      return loc.replace(/\.\w+$/, '').replace(/\/$/, '');
    },
    mappings: sitemappings,
    // verbose: true,
    lastmod: false
  }))
  .pipe(gulp.dest('content/'))
  .pipe(gulp.dest('_site/'));
});

gulp.task('docs.index', function() {
  var lunr = require('lunr');
  var gutil = require('gulp-util');
  var es = require('event-stream');
  var yaml = require('js-yaml');
  var htmlparser = require('htmlparser2');
  var mkdirp = require('mkdirp');
  var fs = require('fs');

  var idx = lunr(function() {
    this.field('path');
    this.field('title', {boost: 10});
    this.field('body');
    this.ref('id');
  });
  var ref = {};
  var refId = 0;

  function addToIndex(path, title, layout, body) {
    // Add the data to the indexer and ref object
    idx.add({'path': path, 'body': body, 'title': title, id: refId});
    ref[refId] = {'p': path, 't': title, 'l': layout};
    refId++;
  }

  var docPath = 'content/docs/';
  gutil.log('Reading docs from', gutil.colors.cyan(docPath));

  return gulp.src([
    docPath + '/{api,cli,components,faq,getting-started,native,resources,theming,utils}/**/*.{md,html,markdown}',
    docPath + '/index.md',
  ])
  .pipe(es.map(function(file, callback) {
    //docs for gulp file objects: https://github.com/wearefractal/vinyl
    var contents = file.contents.toString(); //was buffer

  // Grab relative path from ionic-site root
  var relpath = file.path
    .replace(__dirname + '/content/docs/', '')

    // Read out the yaml portion of the Jekyll file
    var yamlStartIndex = contents.indexOf('---');

    if (yamlStartIndex === -1) {
      return callback();
    }

    // read Jekyll's page yaml variables at the top of the file
    var yamlEndIndex = contents.indexOf('---', yamlStartIndex+3); //starting from start
    var yamlRaw = contents.substring(yamlStartIndex+3, yamlEndIndex);

    var pageData =  yaml.safeLoad(yamlRaw);
    if(!pageData.title || !pageData.layout) {
      return callback();
    }

    // manually set to not be searchable, or for a blog post, manually set to be searchable
    if(pageData.searchable === false || (pageData.layout == 'post' && pageData.searchable !== true)) {
      return callback();
    }

    // clean up some content so code variables are searchable too
    contents = contents.substring(yamlEndIndex+3);
    contents = contents.replace(/<code?>/gi, '');
    contents = contents.replace(/<\/code>/gi, '');
    contents = contents.replace(/<code?></gi, '');
    contents = contents.replace(/><\/code>/gi, '');
    contents = contents.replace(/`</gi, '');
    contents = contents.replace(/>`/gi, '');

    // create a clean path to the URL
    var path = '/' + relpath.replace('index.md', '')
                            .replace('index.html', '')
                            .replace('.md', '.html')
                            .replace('.markdown', '.html');
    if(pageData.layout == 'post') {
      path = '/blog/' + path.substring(19).replace('.html', '/');
    }

    var parser;
    if(pageData.search_sections === true) {
      // each section within the content should be its own search result
      var section = { body: '', title: '' };
      var isTitleOpen = false;

      parser = new htmlparser.Parser({
        ontext: function(text){
          if(isTitleOpen) {
            section.title += text; // get the title of this section
          } else {
            section.body += text.replace(/{%.*%}/, '', 'g'); // Ignore any Jekyll expressions
          }
        },
        onopentag: function(name, attrs) {
          if(name == 'section' && attrs.id) {
            // start building new section data
            section = { body: '', path: path + '#' + attrs.id, title: '' };
          } else if( (name == 'h1' || name == 'h2' || name == 'h3') && attrs.class == 'title') {
            isTitleOpen = true; // the next text will be this sections title
          }
        },
        onclosetag: function(name) {
          if(name == 'section') {
            // section closed, index this section then clear it out
            addToIndex(section.path, section.title, pageData.layout, section.body);
            section = { body: '', title: '' };
          } else if( (name == 'h1' || name == 'h2' || name == 'h3') && isTitleOpen) {
            isTitleOpen = false;
          }
        }
      });
      parser.write(contents);
      parser.end();

    } else {
      // index the entire page
      var body = '';
      parser = new htmlparser.Parser({
        ontext: function(text){
          body += text.replace(/{%.*%}/, '', 'g'); // Ignore any Jekyll expressions
        }
      });
      parser.write(contents);
      parser.end();

      addToIndex(path, pageData.title, pageData.layout, body);
    }

    callback();

  })).on('end', function() {
    // Write out as one json file
    mkdirp.sync(docPath + '/data');
    fs.writeFileSync(
      docPath + '/data/index.json',
      JSON.stringify({'ref': ref, 'index': idx.toJSON()})
    );
  });
});

gulp.task('ionicons', function() {
  gulp.src('node_modules/ionicons/dist/data/ionicons.json')
    .pipe(rename('site_data.json'))
    .pipe(gulp.dest('_site/docs/resources/ionicons/'))
    .pipe(gulp.dest('content/docs/resources/ionicons/'));

  gulp.src('node_modules/ionicons/dist/data/mode-icons.json')
    .pipe(gulp.dest('_site/docs/resources/ionicons/data/'))
    .pipe(gulp.dest('content/docs/resources/ionicons/data/'));

  gulp.src('node_modules/ionicons/dist/data/logo-icons.json')
    .pipe(rename('generic-icons.json'))
    .pipe(gulp.dest('_site/docs/resources/ionicons/data/'))
    .pipe(gulp.dest('content/docs/resources/ionicons/data/'));

  gulp.src('node_modules/ionicons/dist/css/ionicons.min.css')
    .pipe(gulp.dest('_site/css/v2-demos/ionicons/'))
    .pipe(gulp.dest('content/css/v2-demos/ionicons/'));

  return gulp.src('node_modules/ionicons/dist/fonts/*{eot,svg,ttf,woff}')
    .pipe(gulp.dest('_site/css/v2-demos/fonts/'))
    .pipe(gulp.dest('content/css/v2-demos/fonts/'));
});

gulp.task('stencil', function() {
  return gulp.src('node_modules/@ionic/ionic-site-components/dist/ionic-site-components/*.js')
    .pipe(gulp.dest('_site/js/ionic-site-components/'))
    .pipe(gulp.dest('content/js/ionic-site-components/'));
});

gulp.task('build', ['build-prep'], function(done) {
  runSequence('jekyll-build', function() {
    done();
  })
});

gulp.task('build.clean', ['build-prep'], function(done) {
  runSequence('jekyll-build.clean', function() {
    done();
  })
});

gulp.task('slug.prep', function () {
  return del(['assets', 'content']);
});

gulp.task(
  'build-prep',
  [
    'ionicons',
    'styles:v1',
    'styles:v2',
    'styles:creator',
    'js',
    'docs.index',
    'stencil',
  ],
  bustCache
);

gulp.task('default', ['build']);
