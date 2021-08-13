import { newE2EPage } from '@stencil/core/testing';

describe('yh-grid', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<yh-grid></yh-grid>');

    const element = await page.find('yh-grid');
    expect(element).toHaveClass('hydrated');
  });
});
