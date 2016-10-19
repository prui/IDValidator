var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require("gulp-rename");


var path = {
    scripts: './src/*.js'
};



gulp.task('scripts', function() {
    return gulp.src(path.scripts)
        .pipe(uglify())
        .pipe(rename({
            extname: '.min.js'
        }))
        .pipe(gulp.dest("./build/"));
});


gulp.task('build', ['scripts']);
