import { newE2EPage } from '@stencil/core/testing';

describe('outer-component', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<outer-component></outer-component>');

    const element = await page.find('outer-component');
    expect(element).toHaveClass('hydrated');
  });

  it('can hover inner component', async () => {
    const page = await newE2EPage();
    await page.setContent('<outer-component></outer-component>');

    const p = await page.find('outer-component >>> p');
    await page.hover('outer-component >>> p');
    const styles = await p.getComputedStyle();
    expect(styles.color).toBe('rgb(255, 0, 0)');
  });
});
