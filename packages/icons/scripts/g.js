const fs = require('fs');
const images = require('../src/images.json');

const dashToPascalCase = (str) =>
  str
    .toLowerCase()
    .split('-')
    .map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1))
    .join('');

let str = `
// 这个文件请运行 generate:main 生成，请勿手动修改，将会被脚本覆盖。
/* eslint-disable */
/* tslint:disable */
import { createReactComponent } from './createReactComponent';
`
images.forEach(image => {
  str += `
export const ${dashToPascalCase(image)} = /*@__PURE__*/ createReactComponent<HTMLImageElement, HTMLImageElement>(
  '${image}',
);`
});

const path = './src/index.ts'

fs.writeFileSync(path, str)