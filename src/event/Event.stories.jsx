import centered from '@storybook/addon-centered/react';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Event } from './Event';

storiesOf('Event', module)
  .addDecorator(centered)
  .add('default', () => (
    <Event
      event={{
        name: 'Typhoon with Radiation City',
        startDate: new Date('2019-03-28T22:47:35.292Z'),
        location: {
          name: 'The Hi-Dive',
          address: {
            streetAddress: '7 S. Broadway',
            addressLocality: 'Denver',
            addressRegion: 'CO',
            postalCode: '80209',
          },
        },
        offers: [
          {
            url: 'http://www.ticketfly.com/purchase/309433',
            price: 13.0,
            priceCurrency: 'EUR',
          },
        ],
      }}
    />
  ));
