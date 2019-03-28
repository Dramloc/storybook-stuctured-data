import React from 'react';
import { Event } from './event/Event';

export const App = () => (
  <Event
    event={{
      name: 'Typhoon with Radiation City',
      startDate: new Date(),
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
);
