```js script
import { html } from '@open-wc/demoing-storybook';
import '../dist/index.js';

export default {
  title: 'Iconos',
  component: 'wc-icon',
  options: { selectedPanel: "storybookjs/knobs/panel" },
};
```

# Icono

Renderizacion de iconos.

La lista disponible es la siguiente:



## Como usar

### Instalacion

```bash
npm install wc-icon
```

```js
import 'wc-icon/wc-icon.js';
```

```js preview-story
export const Simple = () => html`
  <beta-icon></beta-icon>
`;
```

## Alternativas

### Imagen de icono

```js preview-story
export const Imagen = () => html`
  <beta-icon name="cog"></beta-icon>
`;
```

### Color

```js preview-story
export const Color = () => html`
  <beta-icon color="#ff0000"></beta-icon>
`;
```

### Tamaño

```js preview-story
export const Tamaño = () => html`
  <beta-icon width="10" height="10"></beta-icon>
`;
```
