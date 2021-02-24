import { html, css, LitElement, property } from 'lit-element';

export class WcLayout extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 25px;
      color: var(--wc-layout-text-color, #000);
    }
  `;

  @property({ type: String }) title = 'Hey there';

  render() {
    return html`
    <mwc-drawer hasHeader type="modal" open="true">
      <span slot="title"></span><!-- Need menu title ? -->
      <span slot="subtitle"></span><!-- Need menu subtitle ? -->
      <div class="drawer-content">
        <slot name="menu-area"></slot>
      </div>
      <div slot="appContent">
        <slot name="header-area">
        <div class="main-content">
          <slot name="content-area"></slot>
        </div>
        
        <slot name="footer"></slot>
      </div>
    </mwc-drawer>
    `;
  }
}
