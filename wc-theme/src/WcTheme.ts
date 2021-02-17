import { defaultSize } from './css/size.css';
import { defaultColor } from './css/color.css';

import { LitElement, html } from 'lit-element';

export class WcTheme extends LitElement {
  static get styles() {
    return [defaultColor, defaultSize];
  }

  public render() {

    return html`
      <button
        type="button"
      >
      <span class="primary h3">Prueba de boton</span>
      </button>
    `;
  }
}
