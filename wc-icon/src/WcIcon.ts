import {
  customElement,
  html,
  LitElement,
  property,
  unsafeCSS,
} from "lit-element";

import { WcTheme } from 'wc-theme'

import iconArchive from "./svg/archive";
import chevronDown from "./svg/chevron-down";
import chevronUp from "./svg/chevron-up";
import cog from "./svg/cog";
import cogs from "./svg/cogs";
import fileMedicalAlt from "./svg/file-medical-alt";
import gridHorizontal from "./svg/grid-horizontal";
import iconAdd from "./svg/icon-add";
import iconAlcohol from "./svg/icon-alcohol";
import iconAlergias from "./svg/icon-alergias";
import iconAlerta from "./svg/icon-alerta";
import iconAngleDown from "./svg/icon-angle-down";
import iconAngleLeft from "./svg/icon-angle-left";
import iconAngleRight from "./svg/icon-angle-right";
import iconAngleUp from "./svg/icon-angle-up";
import iconAntFamiliares from "./svg/icon-antfamiliares";
import iconAntPersonales from "./svg/icon-antpersonales";
import iconBack from "./svg/icon-back";
import iconBotonRojo from "./svg/icon-boton-rojo";
import iconCancel from "./svg/icon-cancel";
import iconCheck from "./svg/icon-check";
import iconCheckFill from "./svg/icon-checkFill";
import iconCitas from "./svg/icon-citas";
import iconClaveMedica from "./svg/icon-clave-medica";
import iconConstantes from "./svg/icon-constantes";
import iconContactosAsistenciales from "./svg/icon-contactos-asistenciales";
import iconContraindicaciones from "./svg/icon-contraindicaciones";
import iconCuidados from "./svg/icon-cuidados";
import iconDatosSociales from "./svg/icon-datos-sociales";
import iconDerivaciones from "./svg/icon-derivaciones";
import iconDieta from "./svg/icon-dieta";
import iconEdit from "./svg/icon-edit";
import iconEjercicio from "./svg/icon-ejercicio";
import folder from "./svg/icon-folder";
import folderOpen from "./svg/icon-folder-open";
import iconGesArchivos from "./svg/icon-gestor-archivos";
import iconHappy from "./svg/icon-happy";
import iconHistoricoFormularios from "./svg/icon-historico-formularios";
import iconHistory from "./svg/icon-history";
import iconHsc from "./svg/icon-hsc";
import iconInfClinico from "./svg/icon-inf-clinico";
import iconInterrogacion from "./svg/icon-interrogacion";
import iconLighBlub from "./svg/icon-lighblub";
import iconList from "./svg/icon-list";
import iconMoreIcons from "./svg/icon-more-icons";
import iconMPA from "./svg/icon-mpa";
import iconNavegador from "./svg/icon-navegador";
import iconNext from "./svg/icon-next";
import iconNoDiagnosticos from "./svg/icon-no-diagnosticos";
import iconNoProblemas from "./svg/icon-no-problemas";
import iconPasarConsulta from "./svg/icon-pasar-consulta";
import iconPdi from "./svg/icon-pdi";
import iconPrescripciones from "./svg/icon-prescripciones";
import iconPrint from "./svg/icon-print";
import iconProblemas from "./svg/icon-problemas";
import iconSad from "./svg/icon-sad";
import iconSadCry from "./svg/icon-sad-cry";
import iconSalir from "./svg/icon-salir";
import iconSearch from "./svg/icon-search";
import iconSipad from "./svg/icon-sipad";
import iconSweat from "./svg/icon-sweat";
import iconTabaco from "./svg/icon-tabaco";
import iconTeleconsulta from "./svg/icon-teleconsulta";
import iconTelefonos from "./svg/icon-telefonos";
import iconTelefonosC from "./svg/icon-telefonosC";
import iconTrash from "./svg/icon-trash";
import iconUnlink from "./svg/icon-unlink";
import iconUpdate from "./svg/icon-update";
import iconVie from "./svg/icon-vie";
import iconInfo from "./svg/info";
import pills from "./svg/pills";
import sortdown from "./svg/sort-down";
import sortup from "./svg/sort-up";
import iconUser from "./svg/user";

/**
 * `beta-icon`
 *  Distintos iconos para la UI
 *
 */
@customElement("beta-icon")
export class WcIcon extends LitElement {

  static get styles() {
    return [...WcTheme.styles];
  }
  /**
   * Icono del botón
   */
  @property()
  public listIcons:any = {
    "chevron-down": chevronDown,
    "chevron-up": chevronUp,
    "cog": cog,
    "cogs": cogs,
    "file-medical-alt": fileMedicalAlt,
    "grid-horizontal": gridHorizontal,
    "icon-add": iconAdd,
    "icon-alcohol": iconAlcohol,
    "icon-alergias": iconAlergias,
    "icon-alerta": iconAlerta,
    "icon-angle-down": iconAngleDown,
    "icon-angle-left": iconAngleLeft,
    "icon-angle-right": iconAngleRight,
    "icon-angle-up": iconAngleUp,
    "icon-antfamiliares": iconAntFamiliares,
    "icon-antpersonales": iconAntPersonales,
    "icon-archive": iconArchive,
    "icon-back": iconBack,
    "icon-boton-rojo": iconBotonRojo,
    "icon-cancel": iconCancel,
    "icon-check": iconCheck,
    "icon-checkFill": iconCheckFill,
    "icon-citas": iconCitas,
    "icon-clave-medica": iconClaveMedica,
    "icon-constantes": iconConstantes,
    "icon-contactos-asistenciales": iconContactosAsistenciales,
    "icon-contraindicaciones": iconContraindicaciones,
    "icon-cuidados": iconCuidados,
    "icon-datos-sociales": iconDatosSociales,
    "icon-derivaciones": iconDerivaciones,
    "icon-dieta": iconDieta,
    "icon-edit": iconEdit,
    "icon-ejercicio": iconEjercicio,
    "icon-folder": folder,
    "icon-folder-open": folderOpen,
    "icon-gestor-archivos": iconGesArchivos,
    "icon-happy": iconHappy,
    "icon-historico-formularios": iconHistoricoFormularios,
    "icon-history": iconHistory,
    "icon-hsc": iconHsc,
    "icon-inf-clinico": iconInfClinico,
    "icon-info": iconInfo,
    "icon-interrogacion": iconInterrogacion,
    "icon-lighblub": iconLighBlub,
    "icon-list": iconList,
    "icon-more-icons": iconMoreIcons,
    "icon-mpa": iconMPA,
    "icon-navegador": iconNavegador,
    "icon-next": iconNext,
    "icon-no-diagnosticos": iconNoDiagnosticos,
    "icon-no-problemas": iconNoProblemas,
    "icon-pasar-consulta": iconPasarConsulta,
    "icon-pdi": iconPdi,
    "icon-prescripciones": iconPrescripciones,
    "icon-print": iconPrint,
    "icon-problemas": iconProblemas,
    "icon-sad": iconSad,
    "icon-sad-cry": iconSadCry,
    "icon-salir": iconSalir,
    "icon-search": iconSearch,
    "icon-sipad": iconSipad,
    "icon-sweat": iconSweat,
    "icon-tabaco": iconTabaco,
    "icon-teleconsulta": iconTeleconsulta,
    "icon-telefonos": iconTelefonos,
    "icon-telefonosC": iconTelefonosC,
    "icon-trash": iconTrash,
    "icon-unlink": iconUnlink,
    "icon-update": iconUpdate,
    "icon-user": iconUser,
    "icon-vie": iconVie,
    "pills": pills,
    "sort-down": sortdown,
    "sort-up": sortup,
  };

  @property()
  public name: string = "sort-up";

  /**
   * Ancho.
   */

  @property()
  public width?: string = "16";
  /**
   * altura.
   */

  @property()
  public height?: string = "16";

  @property()
  public color: string = "#000000";

  @property({ attribute: true })
  public cssAdicional: string = "";

  @property({ attribute: true })
  public cssSvg: string = "";

  @property({ attribute: true })
  public viewBox: string = "";

  public render() {
    const icono = this.listIcons[this.name];
    let viewBox = "0 0 64 64";
    if (!this.isBlank(this.viewBox)) {
      viewBox = this.viewBox;
    }
    return html`
       ${this.renderStyles()}
      <svg
        class="svg-default ${this.cssSvg}"
        width="${this.width}"
        height="${this.height}"
        viewBox="${viewBox}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path fill="${this.color}" d="${icono}" />
      </svg>
    `;
  }

  private renderStyles() {
    return html`
      <style>
        ${unsafeCSS(this.cssAdicional)}
      </style>
    `;
  }
  private isNil = (obj: any): boolean => {
    return obj === undefined || obj === null;
  };

  /**
   * Comprueba si el objeto NO es nulo ni undefinido
   * @param obj objeto a evaluar
   */
  private isNotNil = (obj: any): boolean => {
    return !this.isNil(obj);
  };

  /**
   * Comprueba si la cadena viene en blanco
   * @param str cadena a evaluar
   */
  private isBlank = (str: string): boolean => {
    return this.isNil(str) || str.trim() === "";
  };
}
