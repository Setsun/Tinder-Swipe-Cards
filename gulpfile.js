var gulp = require('gulp');
var uglify = require('gulp-uglify');
var minify = require('gulp-minify-css');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var del = require('del');

gulp.task('clean', function(){
  return del(['public/lib', 'public/fonts']);
});

gulp.task('move', function(){
  return gulp.src('node_modules/font-awesome/fonts/*')
    .pipe(gulp.dest('public/fonts'));
});

gulp.task('lib-js', function(){
  return gulp.src(
      ['node_modules/angular/angular.js'],
      {base : 'node_modules/'})
    .pipe(concat('lib.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('public/lib'))
});

gulp.task('lib-css', function(){
  return gulp.src(
      ['node_modules/font-awesome/css/font-awesome.css',
       'node_modules/normalize.css/normalize.css'],
      {base: 'node_modules/'})
    .pipe(concat('lib.min.css'))
    .pipe(minify())
    .pipe(gulp.dest('public/lib'))
});

gulp.task('default', ['move', 'lib-js', 'lib-css']);
