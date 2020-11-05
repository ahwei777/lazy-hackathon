const { src, dest } = require('gulp');

const gulp = require('gulp');

const htmlmin = require('gulp-htmlmin');

const postcss = require('gulp-postcss');
const autoprefixer = require('gulp-autoprefixer');
const cssnano = require('gulp-cssnano');

const minify = require("gulp-babel-minify");

const babel = require('gulp-babel'); // 載入 gulp-babel 套件
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');

gulp.task('html-minify', () => {
  return gulp.src('src/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('dist'));
});

gulp.task('css', () => {
  return gulp.src('src/*.css')
    .pipe(cssnano())
    .pipe(gulp.dest('dist'));
});

gulp.task("js-minify", () => {
  return gulp.src('src/typed.js')
  .pipe(uglify())
  .pipe(gulp.dest('dist'))
});
