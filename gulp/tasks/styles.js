//  Import all Dependencies
import del from 'del';
import gulp from 'gulp';
import {paths} from '../paths';
import requireDir from 'require-dir';
import browserSync from 'browser-sync';
import {stream as wiredep} from 'wiredep';
import gulpLoadPlugins from 'gulp-load-plugins';

// Constants
const $ = gulpLoadPlugins();
const reload = browserSync.reload;

// Styles task
gulp.task('styles', () => {
	return gulp.src(paths.source.sass)
		.pipe($.plumber())
		.pipe($.sourcemaps.init())
		.pipe($.sass.sync({
			outputStyle: 'expanded',
			precision: 10,
			includePaths: ['.']
		}).on('error', $.sass.logError))
		.pipe($.autoprefixer({
			browsers: ['last 1 version']
		}))
		.pipe($.sourcemaps.write())
		.pipe(gulp.dest('.tmp/styles'))
		.pipe(reload({stream: true})
	);
});
