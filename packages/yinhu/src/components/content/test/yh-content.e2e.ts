import { newE2EPage } from '@stencil/core/testing';

describe('yh-content', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<yh-content></yh-content>');

    const element = await page.find('yh-content');
    expect(element).toHaveClass('hydrated');
  });
});
