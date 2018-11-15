module.exports = {
  components: 'src/**/*.js',
  ignore: ['*.test.js', '**/index.js'],
  webpackConfig: require('./example/node_modules/react-scripts/config/webpack.config.dev.js'),
  styleguideDir: './example/public/documentation'
};
