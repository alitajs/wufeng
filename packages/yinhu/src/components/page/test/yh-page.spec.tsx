import { newSpecPage } from '@stencil/core/testing';
import { Page } from '../page';

describe('yh-page', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Page],
      html: `<yh-page></yh-page>`,
    });
    expect(page.root).toEqualHtml(`
      <yh-page>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </yh-page>
    `);
  });
});
