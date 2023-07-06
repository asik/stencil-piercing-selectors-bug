import { newE2EPage } from '@stencil/core/testing';

describe('inner-component', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<inner-component></inner-component>');

    const element = await page.find('inner-component');
    expect(element).toHaveClass('hydrated');
  });

  it('can hover inner component', async () => {
    const page = await newE2EPage();
    await page.setContent('<inner-component></inner-component>');

    const p = await page.find('inner-component >>> p');
    await page.hover('inner-component >>> p');
    const styles = await p.getComputedStyle();
    expect(styles.color).toBe('rgb(255, 0, 0)');
  });
});
