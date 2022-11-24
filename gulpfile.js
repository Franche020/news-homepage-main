const {src, dest, watch} = require('gulp'); // Funciones Gulp
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
    watch('src/sass/**/*.scss', css)
   // watch()

   done();
}

exports.css = css;
exports.img = img;
exports.dev = dev;