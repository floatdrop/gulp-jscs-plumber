var gulp = require('gulp');
var jscs = require('gulp-jscs');
var plumber = require('gulp-plumber');

gulp.task('jscs', function () {
    gulp.src('js/**/*.js')
        .pipe(plumber())
        .pipe(jscs('./.jscsrc'));
});

gulp.task('default', function () {
    gulp.watch('js/**/*.js', function () {
        gulp.start('jscs');
    });
});
