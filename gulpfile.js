/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var gulp = require('gulp'),
    less = require('gulp-less'),
    plumber = require('gulp-plumber'),
    concat = require('gulp-concat'),
    watch = require('gulp-watch');

//Less
gulp.task('less', function () {
    return gulp.src([
        './src/Resources/less/*.less'
    ])
    .pipe(plumber())
    .pipe(less())
    .on('error', function (error) {
        // Would like to catch the error here
        console.log(error);
        this.emit('end');
    })
    .pipe(gulp.dest('public/css/'));
});
// Watch Files For Changes
gulp.task('watch', function () {
    gulp.watch('./src/Resources/less/**/*.less', ['less']);
});
// define tasks here
gulp.task('default', ['less', 'watch']);
gulp.task('build', ['less']);
