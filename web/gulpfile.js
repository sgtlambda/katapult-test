const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('styles', () => {

    gulp.src('assets/styles/main.scss')
        .pipe(sass())
        .pipe(gulp.dest('build/styles/main.css'));
});

gulp.task('default', ['styles']);