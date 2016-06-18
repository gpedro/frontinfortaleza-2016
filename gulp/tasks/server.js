//  Import all Dependencies
import gulp from 'gulp';
import {paths} from '../paths';
import browserSync from 'browser-sync';

// Constants
const reload = browserSync.reload;

gulp.task('serve', ['views', 'styles','images'], () => {
	browserSync({
		notify: false,
		port: 9000,
		server: {
			baseDir: ['.tmp', 'app'],
			routes: {
				'/bower_components': 'bower_components'
			}
		}
	});

	gulp.watch([
		'app/*.html',
		'.tmp/*.html',
		'app/scripts/**/*.js',
		'app/images/**/*',
		'.tmp/fonts/**/*'
	]).on('change', reload);
	gulp.watch(paths.source.jade, ['views']);
	gulp.watch(paths.source.sass, ['styles']);
	gulp.watch(paths.source.fonts, ['fonts']);
	gulp.watch('bower.json', ['wiredep', 'fonts']);
});

gulp.task('serve:dist', () => {
	browserSync({
		notify: false,
		port: 9000,
		server: {
			baseDir: ['dist']
		}
	});
});

gulp.task('serve:test', () => {
	browserSync({
		notify: false,
		port: 9000,
		ui: false,
		server: {
			baseDir: 'test',
			routes: {
				'/bower_components': 'bower_components'
			}
		}
	});

	gulp.watch('test/spec/**/*.js').on('change', reload);
	gulp.watch('test/spec/**/*.js', ['lint:test']);
});
