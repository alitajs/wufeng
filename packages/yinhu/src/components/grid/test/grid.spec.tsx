import { newSpecPage } from '@stencil/core/testing';
import { Grid } from '../grid';

describe('yh-grid', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Grid],
      html: `<yh-grid columns="3"></yh-grid>`,
    });
    expect(page.root).toEqualHtml(`
      <yh-grid columns="3" style="--columns: 3;">
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </yh-grid>
    `);
  });
});
