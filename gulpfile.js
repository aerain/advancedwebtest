var gulp = require('gulp');
var concat = require('gulp-concat');

gulp.task('build', function() {
    return gulp.src(['src/util.js', 'src/app.js'])
    .pipe(concat('app.min.js'))
    .pipe(gulp.dest('build'));
});