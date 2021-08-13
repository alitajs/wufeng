import { newSpecPage } from '@stencil/core/testing';
import { Header } from '../header';

describe('yh-header', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Header],
      html: `<yh-header></yh-header>`,
    });
    expect(page.root).toEqualHtml(`
      <yh-header role="banner">
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </yh-header>
    `);
  });
});
