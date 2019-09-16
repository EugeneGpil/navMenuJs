"use strict";

// modules
const gulp = require('gulp');
const cleanCss = require('gulp-clean-css');
const cleanJs = require('gulp-uglify');
const sass = require('gulp-sass');

//paths
const sassSrc = 'src/sass/style.scss';
const cssDest = 'public/css'
const jsSrc = 'src/js/script.js';
const jsDest = 'public/js';



gulp.task('css', () => {
    return gulp.src(sassSrc)
        .pipe(sass())
        .pipe(gulp.dest(cssDest));
});

gulp.task('js', () => {
    return gulp.src(jsSrc)
        .pipe(gulp.dest(jsDest))
});

gulp.task('watch', function (){
    gulp.watch(sassSrc, gulp.series('css'));
    gulp.watch(jsSrc, gulp.series('js'));
});



gulp.task('production', () => {
    gulp.src('node_modules/normalize.css/normalize.css')
        .pipe(cleanCss())
        .pipe(gulp.dest(cssDest))

    gulp.src('node_modules/animate.css/animate.min.css')
        .pipe(gulp.dest(cssDest));

    gulp.src(jsSrc)
        .pipe(cleanJs())
        .pipe(gulp.dest(jsDest))

    return gulp.src(sassSrc)
        .pipe(sass())
        .pipe(cleanCss())
        .pipe(gulp.dest(cssDest));
});