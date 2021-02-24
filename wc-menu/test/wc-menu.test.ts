import { html, fixture, expect } from '@open-wc/testing';

import { WcMenu } from '../src/WcMenu.js';
import '../wc-menu.js';

describe('WcMenu', () => {
  it('has a default title "Hey there" and counter 5', async () => {
    const el = await fixture<WcMenu>(html`<wc-menu></wc-menu>`);

    expect(el.title).to.equal('Hey there');
    expect(el.counter).to.equal(5);
  });

  it('increases the counter on button click', async () => {
    const el = await fixture<WcMenu>(html`<wc-menu></wc-menu>`);
    el.shadowRoot!.querySelector('button')!.click();

    expect(el.counter).to.equal(6);
  });

  it('can override the title via attribute', async () => {
    const el = await fixture<WcMenu>(
      html`<wc-menu title="attribute title"></wc-menu>`
    );

    expect(el.title).to.equal('attribute title');
  });

  it('passes the a11y audit', async () => {
    const el = await fixture<WcMenu>(html`<wc-menu></wc-menu>`);

    await expect(el).shadowDom.to.be.accessible();
  });
});
