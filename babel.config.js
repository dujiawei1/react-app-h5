module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          chrome: '49',
          ios: '10'
        }
      }
    ]
  ],
  plugins: [
    [
      'import',
      {
        libraryName: 'antd-mobile',
        libraryDirectory: 'es/components',
        style: false,
        transformToDefaultImport: false,
        camel2DashComponentName: false
      },
      'antd-mobile'
    ]
  ]
};
