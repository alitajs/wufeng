import { newSpecPage } from '@stencil/core/testing';
import { Button } from '../button';

describe('yh-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Button],
      html: `<yh-button></yh-button>`,
    });
    expect(page.root).toEqualHtml(`
      <yh-button class="default fill-solid middle yh-color yh-color-default" color="default" fill="solid" role="button" size="middle">
        <mock:shadow-root>
          <button class="button-native" part="native" type="button">
            <span class="button-inner">
              <slot name="start"></slot>
              <slot></slot>
              <slot name="end"></slot>
            </span>
          </button>
        </mock:shadow-root>
      </yh-button>
    `);
  });
});
