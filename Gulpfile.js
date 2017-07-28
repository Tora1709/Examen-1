'use strict';
var gulp = require('gulp'),
    nib = require('nib'),
    connect = require('gulp-connect');

// Servidor web de desarrollo
gulp.task('connect', function () {
  connect.server({
    root:'./',
    port: 8000,
    livereload: true
  });
});
// recarga de css
gulp.task('css', function () {
  gulp.src('./css/*.css')
    .pipe(connect.reload())
})
// recarga de html
gulp.task('html', function () {
    gulp.src('./*.html')
    .pipe(connect.reload())
})
// recarga de js
gulp.task('js', function () {
  gulp.src('./components/*.js')
    .pipe(connect.reload())
})

gulp.task('watch', function () {
  gulp.watch([
    './css/*.css'
  ], ['css']);

  gulp.watch([
    './*.js',
    './components/*.js',
    './components/**/*.js',
    './components/**/**/*.js',
  ], ['js']);

  gulp.watch([
    './*.html',
    './components/*.html',
    './components/**/*.html',
    './components/**/**/*.html'
  ], ['html']);
})

gulp.task('serve', ['connect','css','html','js','watch'])
// npm install -g gulp gulp-cli nodemon
