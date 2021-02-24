import { WcTheme } from 'wc-theme';
import { customElement, html, LitElement, property } from 'lit-element';
import { styles } from './card.css';

// @customElement("beta-card")
export class WcCard extends LitElement {
  static get styles(){
    return [...WcTheme.styles, styles];
  }

  @property({ type: String }) 
  public title = 'Hey there';

  @property({type: String}) 
  public image = '';

  @property({type: String}) 
  public text = '';

  render() {
    return html`
    <div class="card">
      <div class="g360-card-header">
        <slot name="header">
          <h3>${this.title}</h3>
        </slot>
      </div>
      ${this.image?
        html`
        <div class="g360-card-image">
          <img src="${this.image}"></img>
        </div>`:``
      }
      <div class="g360-card-content mdc-card__content">
        <slot name="content">
          <p>${this.text}</p>
        </slot>
      </div>
      <div class="g360-card-actions">
        <button >action</button>
      </div>
    </div>
    `;
  }
}
