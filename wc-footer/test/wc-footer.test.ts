import { html, fixture, expect } from '@open-wc/testing';

import { WcFooter } from '../src/WcFooter.js';
import '../wc-footer.js';

describe('WcFooter', () => {
  it('has a default title "Hey there" and counter 5', async () => {
    const el = await fixture<WcFooter>(html`<wc-footer></wc-footer>`);
  });

});
