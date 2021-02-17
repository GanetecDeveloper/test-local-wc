import { WcTheme } from 'wc-theme';
import { WcIcon } from 'wc-icon';

import {
  customElement,
  html,
  LitElement,
  property,
} from "lit-element";
import { classMap } from "lit-html/directives/class-map";
import { styles } from "./button.css";

/**
 * `beta-button`
 * Distintos estilos y formas de botones
 */
@customElement("beta-button")
export class WcButton extends LitElement {
  static get styles() {
    return [...WcTheme.styles, styles];
  }

  /**
   * Icono. Debe venir relleno con el
   * nombre del icono svg que se quiere pintar.
   */
  @property()
  public icono: string = "cog";

  /**
   * color del icono
   */
  @property()
  public colorIcono: string = "#ff0000";

  /**
   * Texto del botón
   */
  @property()
  public text: string = "Test de prueba";

  @property()
  public type: string = "primary";

  @property()
  public toolbox: "square" | "circle" = "square";

  @property()
  public size: "large" | "medium" | "small" = "medium";

  @property()
  public disabled: boolean = false;

  /**
   * Lista de posibles colores de los iconos.
   */
  private listTypeButtons: any = {
    primary: "dbs-btn-main",
    primaryAlt: "ecu-btn-main",
    secondary: "dbs-btn",
    secondaryAlt: "ecu-btn",
    warning: "dbs-btn-warning",
  };

  public render() {
    const styleClassMap: any = {
      "dbs-btn-default": true,
      "dbs-btn-icono": this.isBlank(this.text),
    };

    if (this.isNotNil(this.toolbox)) {
      styleClassMap["toolbox-" + this.toolbox] = true;
    }
    styleClassMap[this.size] = true;
    const typeStyleClass = this.listTypeButtons[this.type];
    const disabled = "disabled";
    styleClassMap[typeStyleClass] = true;
    styleClassMap[disabled] = this.disabled;
    const d = this.toBoolean(this.disabled);

    return html`
      <button
        type="button"
        class="${classMap(styleClassMap)}"
        @click="${(ev: any) => this.buttonClick(ev)}"
        ?disabled="${d}"
      >
        ${this.renderIcono()} ${this.text}
      </button>
    `;
  }

  private buttonClick(ev: any) {
    const newEvent = new CustomEvent("action", {
      bubbles: true,
      composed: true,
      detail: {},
    });
    this.dispatchEvent(newEvent);
  }

  private renderIcono() {
    WcIcon.render;
    if (this.isNotNil(this.icono)) {
      return html`
        <beta-icon name="${this.icono}" color="${this.colorIcono}" width="10" height="10"></beta-icon>
      `;
    }
  }

  private isNil = (obj: any): boolean => {
    return obj === undefined || obj === null;
  };

  private isNotNil = (obj: any): boolean => {
    return !this.isNil(obj);
  };

  private isBlank = (str: string): boolean => {
    return this.isNil(str) || str.trim() === "";
  };

  private toBoolean = (obj: any, defaultValue = null) => {
    if (this.isNil(obj)) {
      return defaultValue;
    }
    return obj === true || obj === 1 || obj === "true" || obj === "TRUE";
  };
}