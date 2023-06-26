const { watch, series } = require('gulp');
const sass = require('gulp-sass');
const pug = require('gulp-pug');
const browserSync = require('browser-sync').create();

const changeAppStylesFile = (done) => {
    console.log('Ой, файл index.scss изменился');

    done();
};

const checkFileStructure = (done) => {
    console.log('Изменилась структура файлов');

    done();
};

const compileSass = () => {
    return src('dist/css/*.scss')
        .pipe(sass())
        .pipe(dest('build/css'))
        .pipe(browserSync.stream());
};

const compilePug = () => {
    return src('dist/pug/*.pug')
        .pipe(pug())
        .pipe(dest('build/html'))
        .pipe(browserSync.stream());
};

const startServer = (done) => {
    console.log('Запуск сервера...');

    browserSync.init({
        server: {
            baseDir: 'build'
        }
    });

    done();
};

const watchers = () => {
    watch('dist/scss/*.scss', { events: 'change' }, changeAppStylesFile);
    watch('dist/pug/*.pug', { events: ['add', 'unlink'] }, checkFileStructure);
};

exports.compileSass = compileSass;
exports.compilePug = compilePug;
exports.startServer = startServer;
exports.watchers = watchers;