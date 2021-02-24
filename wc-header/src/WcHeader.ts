import { html, LitElement, property, query } from 'lit-element';
import { styles } from './header.css';
import '@material/mwc-icon';
import '@material/mwc-top-app-bar';
import '@material/mwc-icon-button';
import '@material/mwc-drawer';

export class WcHeader extends LitElement {
  static get styles(){
    return [styles];
  }

  @property({ type: String }) logo = '';
  @property({ type: String }) title = 'Title';
  @query('#menu-button') _menuButton: any;
  @query('mvc-drawer') _drawer: any;

  render() {
    return html`
      <mwc-drawer hasHeader type="modal" open="true">
        <span slot="title">Menu Title</span>
        <span slot="subtitle">subtitle</span>
        <div class="drawer-content">
          <p>Planillas</p>
          <p>Enlace 2</p>
          <p>Enlace 3</p>
        </div>
        <div slot="appContent">
          <mwc-top-app-bar centerTitle="true">
            <mwc-icon-button id="menu-button" icon="menu" slot="navigationIcon"></mwc-icon-button>
            <div slot="title">
              <img src="${this.logo ? this.logo : this.title}">
            </div>
            <mwc-icon-button icon="file_download" slot="actionItems"></mwc-icon-button>
            <div><!-- content --></div>
          </mwc-top-app-bar>
          <div class="main-content">
            <slot name="main-content"></slot>
          </div>
          
          <!-- TO DELETE -->
          <style>
            mwc-top-app-bar#footer-to-delete {
              --mdc-theme-primary: #FFFFFF;
              --mdc-theme-on-primary: green;
            }
          </style>
          <mwc-top-app-bar id="footer-to-delete" centerTitle="true"><div slot="title">
            
            <slot name="footer"></slot>

          </div></mwc-top-app-bar>

        </div>
      </mwc-drawer>
    `;
  }

  ready() {  }

  firstUpdated() {

    console.log('BUTTON', this._menuButton);
    this._menuButton?.addEventListener('click', () => {
      console.log('DRAWER', this._drawer.open);
      this._drawer.open = !this._drawer.open;
    });

    console.log(this._drawer);
    if(this._drawer){
      this._drawer.parentNode!.addEventListener('MDCTopAppBar:nav', () => {
        this._drawer.open = !this._drawer.open;
      });
    }
  }


}
