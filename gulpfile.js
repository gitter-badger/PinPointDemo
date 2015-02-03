/**
 * Created by skessler on 2/2/15.
 */

var gulp = require('gulp'),
    sass = require('gulp-ruby-sass');


gulp.task('default', ['styles']);

gulp.task('styles', function() {
    return gulp.src('./app/app.scss')
        .pipe(sass({ style: 'expanded' }))
        .pipe(gulp.dest('app/'));
});