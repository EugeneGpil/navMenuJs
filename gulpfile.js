"use strict";

// modules
const gulp = require('gulp');
const cleanCss = require('gulp-clean-css');
const sass = require('gulp-sass');

//paths
const sassSrc = 'src/sass/style.scss';
const cssDest = 'public/css'



gulp.task('css', () => {
    return gulp.src(sassSrc)
        .pipe(sass())
        .pipe(gulp.dest(cssDest));
});

gulp.task('watch', function (){
    gulp.watch(sassSrc, gulp.series('css'));
});



gulp.task('production', () => {
    gulp.src('node_modules/normalize.css/normalize.css')
        .pipe(cleanCss())
        .pipe(gulp.dest(cssDest))

    gulp.src('node_modules/animate.css/animate.min.css')
        .pipe(gulp.dest(cssDest));

    return gulp.src(sassSrc)
        .pipe(sass())
        .pipe(cleanCss())
        .pipe(gulp.dest(cssDest));
});