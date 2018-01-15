const gulp = require('gulp'),
    less = require('gulp-less'),
    prefixer = require('gulp-autoprefixer'),
    cssmin = require('gulp-minify-css'),
    watch = require('gulp-watch'),
    concat = require('gulp-concat'),
    connect = require('gulp-connect'),
    sourcemaps = require('gulp-sourcemaps'),
    webpack = require('webpack-stream'),
    rename = require('gulp-rename');


const path = {
    dist: {
        js: 'dist/js/',
        css: 'dist/css/',
    },
    
    src: {
        // less: ["src/**/**/*.less", "!src/common/import/*.less"],
        
        lessMain: ["src/**/**/*.less","!src/**/date-selection/*.less", "!src/**/footer/*.less",
            "!src/**/input/*.less", "!src/**/meeting/*.less", "!src/**/select-members/*.less",
            "!src/**/status/*.less", "!src/**/talks/*.less", "!src/common/import/*.less"],
        
        lessMeeting: ["src/**/**/*.less","!src/**/date/*.less", "!src/**/diagram/*.less",
            "!src/**/main/*.less", "!src/**/popup/*.less", "!src/**/rooms/*.less",
            "!src/**/time-scale/*.less", "!src/**/wrapper/*.less", "!src/common/import/*.less"],

        jsMain: ["src/**/**/*.js","!src/**/date-selection/*.js", "!src/**/footer/*.js",
            "!src/**/input/*.js", "!src/**/meeting/*.js", "!src/**/select-members/*.js",
            "!src/**/status/*.js", "!src/**/talks/*.js"],
        
        jsMeeting: ["src/**/**/*.js","!src/**/date/*.js", "!src/**/diagram/*.js",
            "!src/**/main/*.js", "!src/**/popup/*.js", "!src/**/rooms/*.js", 
            "!src/**/time-scale/*.js", "!src/**/wrapper/*.js"],
    },
    
    watch: {
        html: '',
        js: ['src/**/**/*.js'],
        less: ['src/**/**/*.less'],
        css: '',
    },
    outputDir: '.'
};


// start server
gulp.task('connect', function () {
    connect.server({
        root: [path.outputDir],
        port: 5000,
        livereload: true
    });
});


// build css
gulp.task('less-main', function () {
    gulp.src(path.src.lessMain)
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(concat('main.css'))
        .pipe(cssmin())
        .pipe(prefixer())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(path.dist.css))
        .pipe(connect.reload());
});

gulp.task('less-meeting', function () {
    gulp.src(path.src.lessMeeting)
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(concat('meeting.css'))
        .pipe(cssmin())
        .pipe(prefixer())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(path.dist.css))
        .pipe(connect.reload());
});

gulp.task('build:css', ['less-main', 'less-meeting']);


// build js
gulp.task('js-main', function () {
    gulp.src(path.src.jsMain)
        .pipe(webpack(require('./webpack.config.js')))
        .pipe(rename({suffix: '.main'}))
        .pipe(gulp.dest(path.dist.js))
        .pipe(connect.reload());
});

gulp.task('js-meeting', function () {
    gulp.src(path.src.jsMeeting)
        .pipe(webpack(require('./webpack.config.js')))
        .pipe(rename({suffix: '.meeting'}))
        .pipe(gulp.dest(path.dist.js))
        .pipe(connect.reload());
});

gulp.task('build:js', ['js-main', 'js-meeting']);


// watch
gulp.task('watch', function () {
    gulp.watch(path.watch.less, ['build:css']);
    gulp.watch(path.watch.js, ['build:js'])
});


gulp.task('default', ['connect', 'watch']);