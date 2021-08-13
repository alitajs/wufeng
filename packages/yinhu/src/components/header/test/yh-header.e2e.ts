import { newE2EPage } from '@stencil/core/testing';

describe('yh-header', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<yh-header></yh-header>');

    const element = await page.find('yh-header');
    expect(element).toHaveClass('hydrated');
  });
});
