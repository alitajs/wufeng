import { newSpecPage } from '@stencil/core/testing';
import { Input } from '../input';

describe('yh-input', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Input],
      html: `<yh-input></yh-input>`,
    });
    expect(page.root).toEqualHtml(`
      <yh-input class="default yh-color yh-color-default" color="default">
        <mock:shadow-root>
          <input autocapitalize="off" autocomplete="off" autocorrect="off" class="input-native" name="yh-input-0" placeholder="" type="text" value="">
        </mock:shadow-root>
      </yh-input>
    `);
  });
});
