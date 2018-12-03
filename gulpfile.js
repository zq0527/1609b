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
//创建css
gulp.task('sass', function() {

        return gulp.src('./src/scss/*.scss')
            .pipe(sass())
            .pipe(ycss())
            .pipe(gulp.dest('./src/css'))

    })
    //监听sass
gulp.task('watch', function() {

    return gulp.watch('./src/scss/index.scss', gulp.series('sass'))
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

//合并js,压缩js
gulp.task('hJs', function() {

        return gulp.src('./src/js/*.js')
            .pipe(concat('all.js'))
            .pipe(uglify())
            .pipe(gulp.dest('./src/js'))
    })
    //监听2
gulp.task('jian', gulp.parallel('hJs', 'sass', 'watch'))