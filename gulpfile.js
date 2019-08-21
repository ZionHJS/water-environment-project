'use strict';

//引入gulp包依赖
var gulp = require('gulp');
//引入gulp-sass包依赖
var sass = require('gulp-sass');

sass.compiler = require('node-sass');

//创建一个gulp任务:sass
gulp.task('sass', function () {
    return gulp.src('./src/css/sass/**/*.scss')  //gulp.src 让gulp去拿到原始的文件
        //把scss原始文件交给gulp-sass做编译转换成css文件
        .pipe(sass({outputStyle:'expanded'}).on('error', function(e){
            console.log('sass is error...',e);
        }))
        .pipe(gulp.dest('./src/css'));  //把编译好的css输出到该文件夹下
});

//创建gulp监听任务:sass:watch
gulp.task('sass:watch', function () {
    gulp.watch('./src/css/sass/**/*.scss', ['sass']);
});
//让gulp默认执行的任务 default 三个参数 任务名 默认执行的实际任务 回调函数
gulp.task('default',['sass:watch'],function(){
    console.log('default is running...')
});