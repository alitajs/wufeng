export default {
  esm: {
    type: 'rollup',
  },
  cjs: {
    type: 'rollup',
  },
  umd: {
    name: 'DragAndDrop',
    globals: {
      react: 'React',
    },
  },
  disableTypeCheck: true,
};
