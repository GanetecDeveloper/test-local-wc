import { css, CSSResult } from "lit-element";

export const styles: CSSResult = css`
  .card {
    background: #fff;
    border-radius: 2px;
    display: inline-block;
    // height: 300px;
    margin: 1rem;
    padding: 25px;
    position: relative;
    // width: 300px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  }
`;

  // css`
  //   :host {
  //     display: block;
  //     padding: 25px;
  //     color: var(--wc-card-text-color, #000);
  //   }