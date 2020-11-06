const gulp = require('gulp');
const concat = require('gulp-concat');
const sass = require("gulp-sass");
const stripCssComments = require("gulp-strip-css-comments");
const sourcemaps = require("gulp-sourcemaps");
const cssmin = require("gulp-cssmin");
const rename = require("gulp-rename");

const { generateExtractStream } = require('./build/tasks/helper');

gulp.task('concat-style', () => {
  const entries = ['variables', 'mixins', 'rules'].map(entry => `src/style/_${entry}.scss`);

  return generateExtractStream(gulp.src(entries).pipe(concat('style.scss'))).pipe(gulp.dest('dist'));
});

gulp.task('copy-scss', () => {
  return generateExtractStream(gulp.src('src/style/**/*.scss')).pipe(gulp.dest('dist/style'));
});

gulp.task('compile-demo', ['copy-scss'], () => {
  return generateExtractStream(gulp.src('demo/index.scss'))
    .pipe(sass(sass({outputStyle: "expanded", noLineComments: true, keepSpecialComments: 0}).on("error", sass.logError)))
    .pipe(stripCssComments({preserve: false}))
    .pipe(gulp.dest('demo'));
});

gulp.task('compress-demo', ['compile-demo'], () => {
  return gulp
    .src('demo/index.css')
    .pipe(sourcemaps.init({largeFile: true, loadMaps: true}))
    .pipe(cssmin())
    .pipe(rename({suffix: '.min'}))
    .pipe(sourcemaps.write(''))
    .pipe(gulp.dest('demo'));
});

gulp.task('demo', () => {
  gulp.watch(['src/**/*.scss', 'demo/**/*.scss'], ['compress-demo']);
});

gulp.task('default', ['concat-style', 'copy-scss']);
