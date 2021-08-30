import React from 'react';
import { render } from '@alita/test';
import { dashToPascalCase } from './createReactComponent';
import * as Components from './';
import images from './images.json';

const getHtml = (type: string) =>
  `https://cdn.jsdelivr.net/gh/ionic-team/ionic-docs@latest/static/icons/component-${type}-icon.png`;

describe('icons', () => {
  images.forEach((image) => {
    it(image, () => {
      const Dom = Components[dashToPascalCase(image)];
      const { getByRole } = render(<Dom />);
      const img = getByRole('img') as HTMLImageElement;
      expect(img?.src).toBe(getHtml(image));
    });
  });
});
