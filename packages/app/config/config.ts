import { defineConfig } from 'alita';

export default defineConfig({
  appType: 'pc',
  dynamicImportSyntax: {},
  dva: {
    // immer: true,
    skipModelValidate: true,
    extraModels: ['@wufeng/model'],
  },
});
