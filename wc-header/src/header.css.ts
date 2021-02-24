import { css, CSSResult } from "lit-element";

export const styles: CSSResult = css`
  body {
    height: 100vh;
  }
  
  .drawer-content {
    padding: 0px 16px 0 16px;
  }
  
  .main-content {
    min-height: 300px;
    padding: 48px 18px 0 18px;
  }

  mwc-top-app-bar {
    --mdc-theme-primary: #FFFFFF;
    --mdc-theme-on-primary: green;
  }
  
`;
