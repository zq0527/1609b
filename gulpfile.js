var gulp = require('gulp');
//scss的编译
var sass = require('gulp-sass');

//搭建服务器
var webserver = require('gulp-webserver');

//压缩css
var ycss = require('gulp-clean-css');
//压缩js
var uglify = require('gulp-uglify');
//合并js
var concat = require('gulp-concat');
//生成文件后缀民的
var rev = require('gulp-rev');
//替换路径
var collector = require('gulp-rev-collector');
//创建css
// gulp.task('sass', function() {

//         return gulp.src('./src/scss/*.scss')
//             .pipe(sass())
//             .pipe(ycss())
//             .pipe(gulp.dest('./src/css'))

//     })
//     //监听sass
// gulp.task('watch', function() {

//     return gulp.watch('./src/scss/index.scss', gulp.series('sass'))
// })


// //搭建服务器
// gulp.task('webserver', function() {

//     return gulp.src('src')
//         .pipe(webserver({

//             port: 8080,
//             open: true,
//             liverseload: true,
//         }))
// })

//监听2
// gulp.task('jian', gulp.parallel('hJs', 'sass', 'watch'))

//如果我们产品上线了，会出现bug，我们浏览器肯定先去缓存里面查找，我们如何让修改好的js来替换缓存中的js
//合并js,压缩js
gulp.task('hJs', function() {

    return gulp.src('./src/js/*.js')
        // .pipe(concat('all.js'))
        .pipe(uglify())
        .pipe(rev())
        .pipe(gulp.dest('./bulid/js'))
        .pipe(rev.manifest()) //替换文件,自动生成一个json文件，谁要替换谁
        .pipe(gulp.dest('./rev'))
})
gulp.task('copy', function() {
        //为什幺copyhtml，因为我们html里面引入了js文件
        return gulp.src(['./rev/rev-manifest.json', './src/*.html']) //因为我们首先要读取json这个样子我们就知道谁要替换谁了，
            .pipe(collector({
                replaceReved: true, //要替换
            }))
            .pipe(gulp.dest('./bulid'))
    })
    //打包线上
gulp.task('build', gulp.series('hJs', 'copy'));
//如果我们没有发生变化的时候，还会是原来的那个