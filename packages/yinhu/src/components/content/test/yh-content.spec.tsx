import { newSpecPage } from '@stencil/core/testing';
import { Content } from '../content';

describe('yh-content', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Content],
      html: `<yh-content></yh-content>`,
    });
    expect(page.root).toEqualHtml(`
      <yh-content>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </yh-content>
    `);
  });
});
