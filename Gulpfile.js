var gulp        = require('gulp');
var $           = require('gulp-load-plugins')();
var browserSync = require('browser-sync');
var cache       = require('gulp-cache');
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
    .pipe($.autoprefixer({browsers: AUTOPREFIXER_BROWSERS}))
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
    .pipe(cache($.imagemin({
      progressive: true,
      interlaced: true
    })))
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
gulp.task('jekyll-build', [], function(done) {
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
gulp.task('server', ['server:ionicons','server:stylesv1', 'server:stylesv2', 'images',
  'jekyll-build'
], function() {
  browserSync({
    server: {
      baseDir: '_site'
    }
  });
});

gulp.task('server:ionicons', ['ionicons'], function() {
  console.log("ionicons built")
  browserSync.reload();
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

gulp.task('watch', ['server'], function() {
  gulp.watch('scss/**.scss', ['server:stylesv1']);
  gulp.watch(['_scss/*.scss', '_scss/docs/*.scss', '_scss/pages/*.scss'],
             ['server:stylesv2']);
  gulp.watch(['_img/*', '_img/*/*'], ['server:images']);
  gulp.watch(['_js/**/*.js', 'submit-issue/*/*.js'], ['server:js']);
  gulp.watch(['*.html', 'submit-issue/*.html', '_layouts/*', '_layouts/*/*',
    '_posts/*', '_includes/**/*', 'docs/v2/**/*.{md,html,js,css}',
    '!docs/v2/2*', '!docs/v2/nightly'
  ], ['server:jekyll']);

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

  var docPath = 'docs/v2';
  gutil.log('Reading docs from', gutil.colors.cyan(docPath));

  return gulp.src([
    docPath + '/{api,cli,components,faq,getting-started,platform,resources,theming,utils}/**/*.{md,html,markdown}',
    docPath + '/index.md',
  ])
  .pipe(es.map(function(file, callback) {
    //docs for gulp file objects: https://github.com/wearefractal/vinyl
    var contents = file.contents.toString(); //was buffer

    // Grab relative path from ionic-site root
    var relpath = file.path.replace(RegExp('^.*?' + docPath.replace('/docs/v2', '') + '/'), '');

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
  gulp.src('node_modules/ionicons/dist/css/ionicons.min.css')
    .pipe(gulp.dest('./css/v2-demos/ionicons/'));

  gulp.src('node_modules/ionicons/dist/fonts/*{eot,svg,ttf,woff}')
    .pipe(gulp.dest('./css/v2-demos/fonts/'));

  gulp.src('node_modules/ionicons/dist/data/ionicons.json')
    .pipe(rename('site_data.json'))
    .pipe(gulp.dest('./docs/v2/resources/ionicons/'));

  gulp.src('node_modules/ionicons/dist/data/mode-icons.json')
    .pipe(gulp.dest('./docs/v2/resources/ionicons/data/'));

  gulp.src('node_modules/ionicons/dist/data/logo-icons.json')
    .pipe(rename('generic-icons.json'))
    .pipe(gulp.dest('./docs/v2/resources/ionicons/data/'));
});

gulp.task('build', ['ionicons', 'cli-docs', 'styles:v1', 'styles:v2', 'jekyll-build', 'images', 'js']);
gulp.task('default', ['build']);
