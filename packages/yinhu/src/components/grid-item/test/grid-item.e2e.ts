import { newE2EPage } from '@stencil/core/testing';

describe('yh-grid-item', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<yh-grid-item></yh-grid-item>');

    const element = await page.find('yh-grid-item');
    expect(element).toHaveClass('hydrated');
  });
});
