const { src, dest } = require('gulp');

const gulp = require('gulp');

const htmlmin = require('gulp-htmlmin');

const postcss = require('gulp-postcss');
const autoprefixer = require('gulp-autoprefixer');
const cssnano = require('gulp-cssnano');

 
gulp.task('minify', () => {
  return gulp.src('src/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('dist'));
});

gulp.task('css', () => {
  return gulp.src('src/*.css')
    .pipe(cssnano())
    .pipe(gulp.dest('dist'));
});