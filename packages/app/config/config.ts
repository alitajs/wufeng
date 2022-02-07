import { defineConfig } from 'alita';

export default defineConfig({
  appType: 'pc',
  dynamicImportSyntax: {},
  dva: {
    // immer: true,
    skipModelValidate: true,
    extraModels: ['@wufengteam/model'],
  },
  // TODO: 通过补丁插件扩展功能
  // scripts:['http://localhost:55125/index.umd.js','http://localhost:49785/index.umd.js']
});
