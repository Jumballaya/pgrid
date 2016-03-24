var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var rename = require('gulp-rename');
var clean = require('gulp-clean');

var autoprefixer = require('autoprefixer');
var postcss = require('gulp-postcss');
var pcssApply = require('postcss-apply');
var csso = require('postcss-csso');
var customMedia = require('postcss-custom-media');
var customProp = require('postcss-custom-properties');
var nested = require('postcss-nested');
var pseudoEl = require('postcss-pseudoelements');

gulp.task('clean', function() {
  return gulp.src('build/css/*.css', {read: false})
      .pipe(clean());
});

gulp.task('css', ['clean'], function() {
  var processors = [
    autoprefixer({browsers: ['last 1 version']}),
    pcssApply,
    csso,
    customMedia,
    customProp,
    nested,
    pseudoEl
  ];
  return gulp.src('./src/css/*.pcss')
      .pipe(postcss(processors))
      .pipe(rename(function (path) {
        path.extname = '.css'
        return path;
      }))
      .pipe(gulp.dest('./build/css'));
});

gulp.task('server', ['css'], function() {
    browserSync.init({
      server: "./build"
  });

  gulp.watch('src/css/*.pcss', ['css']);
  gulp.watch('src/css/*.pcss').on('change', browserSync.reload);
  gulp.watch('build/*.html').on('change', browserSync.reload);
})


gulp.task('default', ['server']);
