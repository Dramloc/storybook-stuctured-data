import { addDecorator, addParameters, configure } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
import requireContext from 'require-context.macro';

const importAll = r => r.keys().forEach(r);
const loadStories = () => importAll(requireContext('../src', true, /\.stories.jsx?$/));

addDecorator(withA11y);
addParameters({
  backgrounds: [{ name: 'default', value: '#ffffff', default: true }],
});

configure(loadStories, module);
