const aliases = require('gulp-style-aliases');
const scssimport = require('gulp-shopify-sass');
const rename = require("gulp-rename");

function generateExtractStream(stream) {
  return stream
    .pipe(aliases({'~@petals': './node_modules/@petals'}))
    .pipe(scssimport())
    .pipe(
      rename((p) => {
        p.basename = p.basename.replace('.cat.scss', '');
        p.extname = '.scss';
      }),
    );
}

module.exports = {
  generateExtractStream,
};
