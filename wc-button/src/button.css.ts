import { css, CSSResult } from "lit-element";

export const styles: CSSResult = css`
  [type="button"],
  [type="reset"],
  [type="submit"],
  button {
    -webkit-appearance: button;
  }

  .dbs-btn-default {
    white-space: nowrap;
    border-style: solid;
    display: inline-block;
    text-align: center;
    vertical-align: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    border-radius: 3px;
    padding: 2px 6px;
    cursor: pointer;
    outline: 0;
    border-width: 1px;
  }

  /* 2) Botón principal, acción por defecto */

  .ecu-btn-main {
    height: 25px;
    background-color: #24B6F7;
    color: #FFFFFF;
    padding-right: 10px;
    padding-left: 10px;
    box-shadow: rgba(36, 182, 247, 0.3) 0px 3px 6px;
    border: none;
  }

  .ecu-btn {
    height: 25px;
    color: #7C8493;
    padding-right: 10px;
    padding-left: 10px;
    box-shadow: #FFFFFF 0px 0px 0px;
    border: solid 1px #A0AABE;
    background-color: #f9fafb;
  }

  .disabled {
    background-color: #ECECEF;
    color: #A0AABE;
    box-shadow: #FFFFFF 0px 0px 0px;
    border: solid 1px #A0AABE;
  }
`;
