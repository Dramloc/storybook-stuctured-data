import addons, { makeDecorator } from '@storybook/addons';
import { PARAM_KEY, REQUEST } from './constants';

export const withMicrodata = makeDecorator({
  name: 'withMicrodata',
  parameterName: PARAM_KEY,
  wrapper: (getStory, context) => {
    const channel = addons.getChannel();
    channel.emit(REQUEST, getStory(context));
    return getStory(context);
  },
});
