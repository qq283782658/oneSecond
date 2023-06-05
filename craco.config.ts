const path = require('path');

module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://api.cc0820.top:8888',
        pathRewrite: { '^/api': '' },
      },
    },
  },
  webpack: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
    configure: {},
  },
};
export {};
