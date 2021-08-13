import { newE2EPage } from '@stencil/core/testing';

describe('yh-button-page', () => {
  it('renders', async () => {
    const page = await newE2EPage({
      url: '/src/components/button/test',
    });
    const compare = await page.compareScreenshot();
    expect(compare).toMatchScreenshot();
  });
});

describe('yh-button', () => {
  it('renders', async () => {
    const page = await newE2EPage({});
    await page.setContent("<yh-button block color='primary' size='large' fill='outline'></yh-button>");

    const element = await page.find('yh-button');
    expect(element).toHaveClass('hydrated');
    expect(element).toHaveClass('block');
    expect(element).toHaveClass('yh-color');
    expect(element).toHaveClass('yh-color-primary');
    expect(element).toHaveClass('large');
    expect(element).toHaveClass('fill-outline');
  });
});
