const {src, dest, watch, parallel} = require('gulp'); // Funciones Gulp
const sass = require('gulp-sass')(require('sass'));
const plumber = require('gulp-plumber');

function css (done) {
    src('src/sass/**/*.scss')
    .pipe(plumber())
    .pipe(sass())
    .pipe(dest('build/css'));

    done();
}

function img (done) {
    src('src/images/**/*.{jpg,svg,png}')
    .pipe(dest('build/img'));

    done();
}

function dev (done) {
    watch('src/sass/**/*.scss', css);
    watch('src/js/**/*.js', js);
   // watch()

   done();
}

function js (done){
    src('src/js/**/*.js')
    .pipe(dest('build/js'));

    done();
}

exports.css = css;
exports.img = img;
exports.js = js;
exports.dev = parallel (dev,js);