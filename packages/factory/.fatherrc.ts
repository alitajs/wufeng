export default {
  esm: {
    type: 'rollup',
  },
  cjs: {
    type: 'rollup',
  },
  umd: {
    name: 'WuFengFactory',
    globals: {
      // react: 'React',
      '@wufengteam/core': 'WuFengCore',
    },
  },
  disableTypeCheck: true,
};
