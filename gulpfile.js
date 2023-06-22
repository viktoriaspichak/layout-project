const gulp = require('gulp');
const { src, dest, parallel } = require('gulp');

const copyCSS = () => {
    return src('layout-project/dist/css/style.css')
        .pipe(dest('layout-project/build/css'));
};

const moveJS = () => {
    return src('layout-project/dist/js/script.js')
        .pipe(dest('layout-project/build/js'));
};

const moveIndex = () => {
    return src('layout-project/dist/html/index.html')
        .pipe(dest('layout-project/build/html'))
}




exports.copyCSS = copyCSS;
exports.moveJS = moveJS;
exports.moveIndex = moveIndex;

exports.copy = parallel(copyCSS, moveJS, moveIndex);


