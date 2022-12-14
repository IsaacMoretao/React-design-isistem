import { themes } from '@storybook/theming'
import '../src/Styles/Global.css'

import { initialize, mswDecorator } from 'msw-storybook-addon';

initialize({
  onUnhandleReuest: 'bypass',
});

export const decorators = [mswDecorator];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    theme: themes.dark,
  },
}