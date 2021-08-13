import { newE2EPage } from '@stencil/core/testing';

describe('yh-input', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<yh-input></yh-input>');

    const element = await page.find('yh-input');
    expect(element).toHaveClass('hydrated');
  });
});
