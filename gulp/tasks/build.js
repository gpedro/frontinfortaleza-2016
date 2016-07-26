//  Import all Dependencies
import gulp from 'gulp';
import { paths } from '../paths';
import runSequence from 'gulp-run-sequence';
import gulpLoadPlugins from 'gulp-load-plugins';

// Constants
const $ = gulpLoadPlugins();
gulp.task('build', () => {
  runSequence(['html', 'images', 'extras', 'font-awesome', ], 'critical');
  return gulp.src(paths.build.root)
    .pipe($.size({
      title: 'build',
      gzip: true
    }));
});
