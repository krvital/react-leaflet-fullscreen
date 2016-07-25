const gulp = require('gulp');
const cssBase64 = require('gulp-css-base64');
const babel = require('gulp-babel');
const del = require('del');
const rename = require('gulp-rename');

gulp.task('css', function() {
  return gulp.src('node_modules/leaflet.fullscreen/Control.Fullscreen.css')
    .pipe(cssBase64())
    .pipe(rename('index.css'))
    .pipe(gulp.dest('lib'));
});

gulp.task('js', function() {
  return gulp.src('index.js')
    .pipe(babel({
      presets: ["es2015", "react"]
    }))
    .pipe(gulp.dest('lib'));
});

gulp.task('clean', function() {
  return del([
    'lib'
  ]);
});

gulp.task('default', ['clean', 'css', 'js']);
