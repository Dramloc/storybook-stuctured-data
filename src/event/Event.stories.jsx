import centered from '@storybook/addon-centered/react';
import { storiesOf } from '@storybook/react';
import {
  text, select, number, date as dateKnob,
} from '@storybook/addon-knobs';
import React from 'react';
import { Event } from './Event';

const date = (name, defaultValue) => {
  const stringTimestamp = dateKnob(name, defaultValue);
  return new Date(stringTimestamp);
};

storiesOf('Event', module)
  .addDecorator(centered)
  .add('default', () => (
    <Event
      event={{
        name: text('Name', 'Typhoon with Radiation City'),
        startDate: date('Date', new Date('2019-03-28T19:00:00.000Z')),
        location: {
          name: text('Location Name', 'The Hi-Dive'),
          address: {
            streetAddress: text('Street Address', '7 S. Broadway'),
            addressLocality: text('Address Locality', 'Denver'),
            addressRegion: text('Address Region', 'CO'),
            postalCode: text('Postal Code', '80209'),
          },
        },
        offers: [
          {
            url: text('URL', 'http://www.ticketfly.com/purchase/309433'),
            price: number('Price', 13.0),
            priceCurrency: select(
              'Currency',
              {
                EUR: 'EUR',
                USD: 'USD',
              },
              'EUR',
            ),
          },
        ],
      }}
    />
  ));
