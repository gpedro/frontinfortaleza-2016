//  Import all Dependencies
import gulp from 'gulp';
import critical from 'critical';
import browserSync from 'browser-sync';
import { stream as wiredep } from 'wiredep';
import gulpLoadPlugins from 'gulp-load-plugins';

// Constants
const $ = gulpLoadPlugins();
const reload = browserSync.reload;
const dimensions = [{
  width: 320,
  height: 480
}, {
  width: 768,
  height: 1024
}, {
  width: 1280,
  height: 960
}];

gulp.task('html', ['views', 'styles'], () => {
  const assets = $.useref({
    searchPath: ['.tmp', 'app', '.']
  });

  return gulp.src(['app/*.html', '.tmp/*.html'])
    .pipe(assets)
    .pipe($.if('*.js', $.uglify()))
    .pipe($.if('*.css', $.minifyCss({
      compatibility: '*'
    })))
    .pipe($.if('*.js', $.rev()))
    .pipe($.if('*.css', $.rev()))
    .pipe($.revReplace())
    .pipe($.if('*.html', $.minifyHtml({
      conditionals: true,
      loose: true
    })))
    .pipe(gulp.dest('dist'));
});

gulp.task('views', () => {

  return gulp.src('app/*.jade')
    .pipe($.data(function(file) {
      return require('../../_data.json');
    }))
    .pipe($.jade({
      pretty: true
    }))
    .pipe(gulp.dest('.tmp'))
    .pipe(reload({
      stream: true
    }));
});

// Gerenate critical path
gulp.task('critical', () => {
  critical.generate({
    minify: true,
    inline: true,
    base: 'dist',
    extract: true,
    src: 'index.html',
    dimensions: dimensions,
    dest: 'dist/index.html',
    ignore: ['@font-face', /url\(/]
  });
});


// inject bower components
gulp.task('wiredep', () => {
  gulp.src('app/styles/*.scss')
    .pipe(wiredep({
      ignorePath: /^(\.\.\/)+/
    }))
    .pipe(gulp.dest('app/styles'));

  gulp.src('app/layouts/*.jade')
    .pipe(wiredep({
      exclude: ['bootstrap-sass'],
      ignorePath: /^(\.\.\/)*\.\./
    }))
    .pipe(gulp.dest('app'));
});
