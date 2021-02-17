import { css } from "lit-element";

export const defaultSize = css`
   :host {
      --h1Size: 30px;
      --h2Size: 26px;
      --h3Size: 22px;
   }
   .h1{
      font-size: var(--h1Size);
   }
   .h2{
      font-size: var(--h2Size);
   }
   .h3{
      font-size: var(--h3Size);
   }
`;