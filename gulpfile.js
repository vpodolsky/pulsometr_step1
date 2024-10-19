const gulp        = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();
const cleanCSS = require('gulp-clean-css');
const rename = require("gulp-rename");
const cache = require ("gulp-cache");


// Static server
gulp.task('server', function() {
    browserSync.init({
        server: {
            baseDir: "assets"
        }

    });
    gulp.watch("assets/*.html").on('change', browserSync.reload);
});
gulp.task('styles', function() {
    return gulp.src("assets/sass/**/*.+(scss|sass)")
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(rename({suffix: '.min', prefix: ''}))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest("assets/css"))
        .pipe(browserSync.stream());
});

gulp.task('images', () =>
    gulp.src('assets/**/*.{jpg,png,svg}')
        // eslint-disable-next-line no-undef
        .pipe(cache(srcset(),
            // Target plugin, the output of which will be cached.srcset(srcsetRules),
            // Options for `gulp-cache` plugin.
            {
                // Bucket to store images in cache.
                name: 'images'
            }
        ))
        .pipe(gulp.dest('./images'))
);

gulp.task('watch', function() {
    gulp.watch("assets/sass/**/*.+(scss|sass)", gulp.parallel('styles'));
})

gulp.task('default', gulp.parallel('watch', 'server', 'styles'));
