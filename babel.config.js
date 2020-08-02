const productionPlugins = [
  ['transform-react-remove-prop-types', { mode: 'unsafe-wrap' }],
];

module.exports = {
  presets: [
    '@babel/preset-react',
    [
      '@babel/preset-env',
      {
        bugfixes: true,
        modules: process.env.BABEL_ENV === 'esm' ? false : 'commonjs',
        targets: {
          node: 'current',
        },
      },
    ],
  ],
  plugins: [
    ['dynamic-import-node'],
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    ['@babel/plugin-proposal-optional-chaining', { loose: true }],
    ['@babel/plugin-proposal-object-rest-spread', { loose: true }],
    ['@babel/plugin-transform-runtime', { version: '^7.4.4' }],
  ],
  env: {
    cjs: {
      plugins: productionPlugins,
    },
    esm: {
      plugins: [
        ...productionPlugins,
        ['@babel/plugin-transform-runtime', { useESModules: true }],
      ],
    },
    production: {
      plugins: [
        ...productionPlugins,
        ['@babel/plugin-transform-runtime', { useESModules: true }],
      ],
    },
  },
};
