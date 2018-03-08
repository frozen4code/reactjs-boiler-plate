var gulp        = require('gulp');
var csso        = require('gulp-csso');
var babel       = require('gulp-babel');
var pug         = require('gulp-pug');
var sass        = require('gulp-sass');
var browserify  = require('browserify');
var gulpif      = require('gulp-if');
var uglify      = require('gulp-uglify');

gulp.task('sass', () => {
    return (gulp.src('views/style').pipe(sass()).pipe(csso()).pipe(gulp.dest('public/css')));
});

gulp.task('react', () => {
    return
    browserify({entries: 'app/main.js', debug: true})
        .transform('babelify', {'presets': ['es2015', 'react']})
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(gulpif(argv.production, uglify()))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('public/js'));
});

// Watch for JS changes, then rebundle.
gulp.task('watchify', ()=>{
    var bundler = watchify(browserify({entries:'app/main.js', debug:true}, watchift.args));
    bundler.transform('babelify', {presets:['env', 'react']});
    bundler.on('update',  rebundle);
    return rebundle();
    function rebundle(){
        var start = Date.now();
        return (
            bundler.bundle()
            .on('error', function(err){
                gulpUtil.log(gulpUtil.colors.red(err.toString()));
            })
            .on('end', function(){
                gulpUtil.log(gulpUtil.colors.green('Finished rebundling in', (Date.now()-start)+'ms'));
            })
            .pipe(source('bundle.js'))
            .pipe(buffer())
            .pipe(sourcemaps.init({loadMaps: true}))
            .pipe(sourcemaps.write('.'))
            .pipe(gulp.dest('public/js'))
        )
    }
});

// Watch for css changes then run the 'sass' task defined above.
gulp.task('watch', function(){
    gulp.watch('public/css/**.scss', ['sass']);
});

gulp.task('build', ['sass', 'react']);
gulp.task('default', ['build', 'watch', 'watchify']);
