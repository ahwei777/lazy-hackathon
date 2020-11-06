const { src, dest } = require('gulp');

const gulp = require('gulp');

const htmlmin = require('gulp-htmlmin');

const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('gulp-cssnano');

const minify = require("gulp-babel-minify");

const babel = require('gulp-babel'); // 載入 gulp-babel 套件
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');

const tinypng = require('gulp-tinypng-compress');

const webp = require('gulp-webp');

gulp.task('html-minify', () => {
  return gulp.src('src/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('dist'));
});

gulp.task('css', () => {
  return gulp.src('css/style.css')
    .pipe(postcss([autoprefixer()]))
    .pipe(cssnano())
    .pipe(gulp.dest('dist'));
});

gulp.task('css-all', () => {
  return gulp.src('src/*.css')
    .pipe(postcss([autoprefixer()]))
    .pipe(cssnano())
    .pipe(concat('all.css'))
    .pipe(gulp.dest('dist'));
});

gulp.task("js-minify", () => {
  return gulp.src('src/typed.js')
  .pipe(uglify())
  .pipe(gulp.dest('dist'))
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