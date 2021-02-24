import { html, css, LitElement, property } from 'lit-element';
import { styles } from './footer.css';
import '@material/mwc-icon';
import '@material/mwc-top-app-bar';

export class WcFooter extends LitElement {
  static get styles(){
    return [styles];
  }

  render() {
    return html`
      <mwc-top-app-bar centerTitle="true">
        <slot name="left" slot="navigationIcon">
        <div slot="title">
          <slot name="center">
        </div>
        <slot name="right" slot="actionItems">
      </mwc-top-app-bar>
    `;
  }
}
