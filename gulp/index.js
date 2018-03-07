var gulp            = require('gulp');
var autoprefixer    = require('gulp-autoprefixer');
var babel           = require('gulp-babel');
var browserSync     = require('browser-sync');
var concat          = require('gulp-concat');
var eslint          = require('gulp-eslint');
var filter          = require('gulp-filter');
var newer           = require('gulp-newer');
var notify          = require('gulp-notify');
var plumber         = require('gulp-plumber');
var reload          = browserSync.reload;
var sass            = require('gulp-sass');
var sourcemaps      = require('gulp-sourcemaps');

var onError = (err) => {
    notify.onError({
        title: 'Error',
        message: '<%= error %>',
    })(err);
    this.emit('end');
}
var plumberOptions = {
    errorHandler: onError,
};

var jsFiles = {
    vendor: [],
    source: [
        'assets/js/src/'
    ]
}
