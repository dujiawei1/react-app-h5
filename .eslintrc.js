module.exports = {
  root: true, // 指定此配置文件为根配置，ESLint 将不会查找父目录中的配置文件
  env: {
    node: true, // 启用 Node.js 环境
    browser: true, // 启用浏览器环境
    es2021: true // 启用 ES6 的语法
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    // 规则
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-explicit-any': 'off'
  }
};
