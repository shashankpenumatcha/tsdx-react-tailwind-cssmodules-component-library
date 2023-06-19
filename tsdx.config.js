const postcss = require('rollup-plugin-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
module.exports = {
  rollup(config, options) {
    config.plugins.push(
      postcss({
        plugins: [
          autoprefixer(),
          cssnano({
            preset: 'default',
          }),
        ],
        use: [
          ['sass', {
            includePaths: ["src"]
          }]
        ],
        extensions: ['.scss'],
        modues:true,
        inject: true,
        extract:false
      })
    );
    return config;
  },
};