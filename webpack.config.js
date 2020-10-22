const path = require('path');

module.exports = {
  entry: './src/index.js',
  devServer: {
    public: 'bluejay.digital',
    host: '0.0.0.0',
    disableHostCheck: true
  },
};
