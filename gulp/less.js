var gulp = require('gulp'),
    less = require('gulp-less'),
    path = require('path');

gulp.task('less', function(){
    return gulp.src('./src/styles/less/**/*.less')
        .pipe(less({
            paths: [ path.join(__dirname, 'less', 'includes')]
        }))
        .pipe(gulp.dest('./_tmp'));
});