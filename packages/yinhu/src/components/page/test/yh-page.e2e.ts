import { newE2EPage } from '@stencil/core/testing';

describe('yh-page', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<yh-page></yh-page>');

    const element = await page.find('yh-page');
    expect(element).toHaveClass('hydrated');
  });
});
