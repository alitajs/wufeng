import { newSpecPage } from '@stencil/core/testing';
import { Footer } from '../footer';

describe('yh-footer', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Footer],
      html: `<yh-footer></yh-footer>`,
    });
    expect(page.root).toEqualHtml(`
      <yh-footer role="contentinfo">
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </yh-footer>
    `);
  });
});
