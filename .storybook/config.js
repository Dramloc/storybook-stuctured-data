import { addDecorator, addParameters, configure } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs } from '@storybook/addon-knobs';
import { withMicrodata } from './addon-microdata/src';
import requireContext from 'require-context.macro';

const importAll = r => r.keys().forEach(r);
const loadStories = () => importAll(requireContext('../src', true, /\.stories.jsx?$/));

addDecorator(withKnobs);
addDecorator(withA11y);
addDecorator(withMicrodata);
addParameters({
  backgrounds: [{ name: 'default', value: '#ffffff', default: true }],
});

configure(loadStories, module);
