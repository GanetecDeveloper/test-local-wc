```js script
import { html } from '@open-wc/demoing-storybook';
import '../dist/index.js';

export default {
  title: 'Botones',
  component: 'wc-button',
  options: { selectedPanel: "storybookjs/knobs/panel" },
};
```

# WcButton

A component for...

## Features:

- a
- b
- ...

## How to use

### Installation

```bash
yarn add wc-button
```

```js
import 'wc-button/wc-button.js';
```

```js preview-story
export const Simple = () => html`
  <beta-button></beta-button>
`;
```

## Variations

###### Custom Title

```js preview-story
export const CustomTitle = () => html`
  <beta-button text="Cambio de titulo"></beta-button>
`;
```
