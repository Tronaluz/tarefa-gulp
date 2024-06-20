const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');


function compileSass() {
    return gulp.src('./source/styles/main.scss')
       .pipe(sass())
       .pipe(gulp.dest('./build/styles'));
}


function compressImages() {
    return gulp.src('./source/images/*')
       .pipe(imagemin())
       .pipe(gulp.dest('./build/images'));
}


function compJs() {
    return gulp.src('./source/script/*.js')
       .pipe(uglify())
       .pipe(gulp.dest('./build/script'));
}



exports.compileSass = compileSass;
exports.compressImages = compressImages;
exports.compJs = compJs;

