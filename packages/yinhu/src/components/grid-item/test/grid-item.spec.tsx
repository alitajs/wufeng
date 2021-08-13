import { newSpecPage } from '@stencil/core/testing';
import { GridItem } from '../grid-item';

describe('yh-grid-item', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [GridItem],
      html: `<yh-grid-item></yh-grid-item>`,
    });
    expect(page.root).toEqualHtml(`
      <yh-grid-item style="--item-span: 1;">
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </yh-grid-item>
    `);
  });
});
