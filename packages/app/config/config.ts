import { defineConfig } from 'alita';

export default defineConfig({
  appType: 'pc',
  dynamicImportSyntax: {},
  dva: {
    skipModelValidate: true,
    extraModels: ['@wufeng/model'],
  },
});
