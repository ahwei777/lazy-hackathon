const { src, dest } = require('gulp');

const gulp = require('gulp');

const htmlmin = require('gulp-htmlmin');

const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('gulp-cssnano');

const concat = require('gulp-concat');

const minify = require("gulp-babel-minify"); // 會出錯
const babel = require('gulp-babel'); // 載入 gulp-babel 套件
const uglify = require('gulp-uglify'); // 不支援 ES6 還要先用 babel 處理
const terser = require('gulp-terser'); // 壓縮 JS

const tinypng = require('gulp-tinypng-compress');

const webp = require('gulp-webp');

const uncss = require('postcss-uncss')

gulp.task('html', () => {
  return gulp.src('index-unminify.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('dist'));
});

gulp.task('css-nano', () => {
  return gulp.src('dist/main.css')
    .pipe(cssnano())
    .pipe(gulp.dest('dist/main-min.css'));
});

gulp.task('uncss', () => {
  return gulp.src('css/bootstrap.css')
    .pipe(postcss([uncss(
      {
        html: ['./index.html'], //檢查的頁面(網址也可)
      }
    )]))
    .pipe(gulp.dest('dist'));
});

gulp.task('css-all', () => {
  return gulp.src('css/*.css')
    .pipe(postcss([autoprefixer()])) // 將編譯完成的 CSS 做 PostCSS 處理
    .pipe(cssnano())
    .pipe(concat('main.css'))
    .pipe(gulp.dest('dist'));
});

gulp.task('js-all', () => {
  return gulp.src('src/*.js')
    .pipe(terser())
    .pipe(concat('all.js'))
    .pipe(gulp.dest('dist'));
});

gulp.task('tinypng', function () {
	gulp.src('image/*.{png,jpg,jpeg}')
		.pipe(tinypng({
			key: 'FKvJ5YffpCSTm8kdCNHR5hXcK8kcFqtt',
			sigFile: 'images/.tinypng-sigs',
			log: true
		}))
		.pipe(gulp.dest('dist/images'));
});

gulp.task('webp', () =>
    gulp.src('image/*.{png,jpg,jpeg}')
        .pipe(webp())
        .pipe(gulp.dest('dist/image'))
);