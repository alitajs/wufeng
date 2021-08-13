import { newE2EPage } from '@stencil/core/testing';

describe('yh-footer', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<yh-footer></yh-footer>');

    const element = await page.find('yh-footer');
    expect(element).toHaveClass('hydrated');
  });
});
