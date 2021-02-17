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

  @property({ type: Number }) 
  public counter = 5;

  @property({type: String}) 
  public image = '';

  @property({type: String}) 
  public text = '';

  __increment() {
    this.counter += 1;
  }

  render() {
    return html`
    <div class="card">
      <div class="g360-card-header">
        <h3>${this.title}</h3>
      </div>
      ${this.image?
        html`
        <div class="g360-card-image">
          <img src="${this.image}"></img>
        </div>`:``
      }
      <div class="g360-card-content mdc-card__content">
        <p>${this.text}</p>
      </div>
      <div class="g360-card-actions">
        <button @click=${this.__increment}>action</button>
      </div>
    </div>
    `;
  }
}
