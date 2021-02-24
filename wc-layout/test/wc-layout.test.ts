import { html, fixture, expect } from '@open-wc/testing';

import { WcLayout } from '../src/WcLayout.js';
import '../wc-layout.js';

describe('WcLayout', () => {
  it('has a default title "Hey there" and counter 5', async () => {
    const el = await fixture<WcLayout>(html`<wc-layout></wc-layout>`);

    expect(el.title).to.equal('Hey there');
    expect(el.counter).to.equal(5);
  });

  it('increases the counter on button click', async () => {
    const el = await fixture<WcLayout>(html`<wc-layout></wc-layout>`);
    el.shadowRoot!.querySelector('button')!.click();

    expect(el.counter).to.equal(6);
  });

  it('can override the title via attribute', async () => {
    const el = await fixture<WcLayout>(html`<wc-layout title="attribute title"></wc-layout>`);

    expect(el.title).to.equal('attribute title');
  });

  it('passes the a11y audit', async () => {
    const el = await fixture<WcLayout>(html`<wc-layout></wc-layout>`);

    await expect(el).shadowDom.to.be.accessible();
  });
});
