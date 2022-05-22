const {src, dest, watch, parallel} = require('gulp');
//CSS
const sass = require('gulp-sass')(require('sass'));
const plumber = require('gulp-plumber');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const postcss = require('gulp-postcss');
const sourcemap = require('gulp-sourcemaps')
//Imagenes 
const imagemin = require('gulp-imagemin');
const cache = require('gulp-cache');
const webp = require('gulp-webp');
const avif = require('gulp-avif');

//JS
const terser = require('gulp-terser-js');
function css (done){
    src('src/scss/**/*.scss') //Identificar el archivo .scss a compilar
    .pipe(sourcemap.init())
    .pipe(plumber())
    .pipe(sass()) // Compilarlo
    .pipe(sourcemap.write('.'))
    .pipe(dest ('build/css')) //ALmacenarla en el disco duro
    .pipe(postcss ([autoprefixer(), cssnano()]))
    
    done(); // ya acabo
}
function imagenes(done){
     const opciones = { 
        optimizationLevel:3
    }
    src('src/img/**/*')
   
    .pipe(cache(imagemin(opciones)))
    .pipe(dest('build/img'))
    done();
}
function versionWebp(done){
    const opciones={
        quality: 50
    };
    src('src/img/**/*')
    .pipe(webp(opciones))
    .pipe(dest('build/img'))
    done();
}

function versionAvif( done ) {
    const opciones = {
        quality: 50
    };
    src('src/img/**/*.{png,jpg}')
        .pipe( avif(opciones) )
        .pipe( dest('build/img') )
    done();
}
function javascript(done){
    src('src/js/**/*.js')
    .pipe(sourcemap.init())
    .pipe(terser())
    .pipe(sourcemap.write('.'))
    .pipe(dest('build/js'));
    done();
}
function dev(done){
    watch('src/scss/**/*.scss', css);//escucha por cambios
    watch('src/js/**/*.js', javascript);
    done();
}
exports.css = css;
exports.js=javascript;
exports.imagenes = imagenes;
exports.versionWebp = versionWebp;
exports.versionAvif = versionAvif;
exports.dev = parallel(versionWebp,versionAvif,javascript, dev) ;
