var gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('default', () =>
    gulp.src('./src/css/**/*.css')
 .pipe(autoprefixer({
            browsers: ['last 2 versions'],
        
        })))