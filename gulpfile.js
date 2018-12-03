var gulp = require('gulp');
//scss的编译
var sass = require('gulp-sass');

//创建css
gulp.task('sass', function() {

    return gulp.src('./src/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./src/css'))

})