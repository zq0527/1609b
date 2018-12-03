var gulp = require('gulp');
//scss的编译
var sass = require('gulp-sass');

//搭建服务器
var webserver = require('gulp-webserver');
//创建css
gulp.task('sass', function() {

    return gulp.src('./src/scss/*.scss')
        .pipe(sass())
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