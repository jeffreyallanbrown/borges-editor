const path = require('path');

module.exports = {
  entry: './src/index.js',
  devServer: {
    public: '',
    host: '0.0.0.0',
    disableHostCheck: true
  },
};
