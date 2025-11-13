const path = require('path');
const CracoLessPlugin = require('craco-less');

const resolve = (dir) => path.resolve(__dirname, dir);

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin
      /* options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#1DA57A' },
            javascriptEnabled: true
          }
        }
      } */
    }
  ],
  devServer: {
    client: {
      overlay: false // 编译错误时取消全屏覆盖
    }
  },
  webpack: {
    alias: {
      '@': resolve('src')
    }
  }
};
