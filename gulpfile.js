'use strict';

global.isProd = false;

import './gulp';

/*
    --TOP LEVEL FUNCTION--
    gulp.task - Define tasks
    gulp.src - Point to files to use
    guld.dest - Point to folder to output
    gulp.watch - Watch files and folders for changes
*/
// gulp.task('message', function(){
//     return console.log('Gulp is running.');
// });
// gulp.task('pug', ()=>{
//     gulp.src('src/templates/*.pug')
//         .pipe(pug())
//         .pipe(gulp.dest('dist/html'))
// });
// gulp.task('html', ()=>{
//     gulp.src('src/templates/*.html')
//         .pipe(gulp.dest('dist/html'))
// });
// gulp.task('css', ()=>{
//     gulp.src('src/css/*.scss')
//         .pipe(sass())
//         .pipe(minifyCSS())
//         .pipe(gulp.dest('dist/css'))
// });
// gulp.task('js', ()=>{
//     gulp.src('src/js/*.js')
//         .pipe(uglify())
//         .pipe(concat('main.js'))
//         .pipe(gulp.dest('dist/js'))
// });
// gulp.task('default', ['html', 'pug', 'css', 'js']);
