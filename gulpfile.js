var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require("gulp-rename");
var concat = require('gulp-concat');


var path = {
    scripts: './src/*.js'
};



gulp.task('scripts', function() {
    return gulp.src(path.scripts)
        .pipe(concat('id-validator.js'))
        .pipe(uglify())
        .pipe(rename({
            extname: '.min.js'
        }))
        .pipe(gulp.dest("./dist/"));
});


gulp.task('build', ['scripts']);
