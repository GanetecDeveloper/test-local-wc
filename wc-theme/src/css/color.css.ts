import { css } from "lit-element";

export const defaultColor = css`
    :host {
        --primaryColor: #356e3b;
        --secondaryColor: #5b8e48;
        --terciaryColor: #302e2b;
    }
    .primary{
        color: var(--primaryColor);
    }
    .secondary{
        color: var(--secondaryColor);
    }
    .terciary{
        color: var(--terciaryColor);
    }
`;