var gulp = require('gulp'),
    less = require('gulp-less'),
    watch = require('gulp-watch'),
    browserSync = require ('gulp-browserSync');

gulp.task('vasyatask', function() {
    console.log('привіт я таск  чо как чо по чом');
});

gulp.task('less', function() {
    return gulp.src('app/less/main.less')
    .pipe(less())
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({stream:true}))
});

gulp.task('watch', ['browser-sync', 'less'], function() {
     gulp.watch ('app/less/**/*.less', ['less']);
});

gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: 'app'
        },
        notify: false
    });
});
    