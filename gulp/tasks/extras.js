//  Import all Dependencies
import del from 'del';
import gulp from 'gulp';

gulp.task('extras', () => {
  return gulp.src([
    'app/*.*',
    '!app/*.html',
    '!app/*.jade'
  ], {
    dot: true
  }).pipe(gulp.dest('dist'));
});

gulp.task('clean', del.bind(null, ['.tmp', 'dist']));

gulp.task('font-awesome', () => {
  return gulp.src('app/font-awesome/**/*')
    .pipe(gulp.dest('dist/font-awesome/'))
})
