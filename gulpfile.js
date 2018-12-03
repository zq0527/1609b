var gulp = require('gulp');
//scss的编译
var sass = require('gulp-sass');

//搭建服务器
var webserver = require('gulp-webserver');

//压缩css
var ycss = require('gulp-clean-css');
//创建css
gulp.task('sass', function() {

    return gulp.src('./src/scss/*.scss')
        .pipe(sass())
        .pipe(ycss())
        .pipe(gulp.dest('./src/css'))

})

//搭建服务器
gulp.task('webserver', function() {

        return gulp.src('src')
            .pipe(webserver({

                port: 8080,
                open: true,
                liverseload: true,
            }))
    })
    //监听sass
gulp.task('watch', function() {

    return gulp.watch('./src/scss/index.scss', gulp.series('sass'))
})