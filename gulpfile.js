var gulp = require('gulp');
var ts = require('gulp-typescript');
var path = require('path');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('build:server', function() {
    var tsProject = ts.createProject(path.resolve('./tsconfig.json'));
    var tsResult = gulp.src([
        '**/*.ts',
        '!node_modules/**/*.ts'
    ])
        .pipe(sourcemaps.init())
        .pipe(tsProject())
    return tsResult.js
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(path.resolve('.')))
});

gulp.task('build', gulp.series('build:server'));

gulp.task('default', gulp.series('build'));