import React, { useEffect } from 'react';
import addons, { types } from '@storybook/addons';
import { ADDON_ID, PANEL_ID } from './constants';
import { STORY_RENDERED } from '@storybook/core-events';

const Panel = ({ active, api }) => {
  useEffect(() => {
    const onStoryRendered = async id => {
      const iframe = document.getElementById('storybook-preview-iframe');
      const element = iframe.contentWindow.document.getElementById('root');
      const response = await fetch(
        'https://cors-anywhere.herokuapp.com/https://search.google.com/structured-data/testing-tool/validate',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: `${encodeURIComponent('html')}=${encodeURIComponent(element.innerHTML)}`,
        },
      );
      const text = await response.text();
      const json = JSON.parse(text.substring(4));
      console.log(json);
    };
    api.on(STORY_RENDERED, onStoryRendered);
    return () => {
      api.off(STORY_RENDERED, onStoryRendered);
    };
  });
  return active ? React.createElement('span', {}, 'panel') : null;
};

addons.register(ADDON_ID, api => {
  addons.add(PANEL_ID, {
    type: types.PANEL,
    title: 'Microdata',
    render: ({ active, key }) => React.createElement(Panel, { key, api, active }),
  });
});
