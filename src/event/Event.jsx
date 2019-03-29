import styled from '@emotion/styled-base';
import PropTypes from 'prop-types';
import React from 'react';
import { formatDate } from './formatDate';
import { formatPrice } from './formatPrice';
import { formatTime } from './formatTime';

const EventWrapper = styled('article')({
  width: '100%',
  marginBottom: 25,
  backgroundColor: '#fff',
  padding: '12px 15px',
  fontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    'Segoe UI',
    'Roboto',
    'Oxygen',
    'Ubuntu',
    'Cantarell',
    'Fira Sans',
    'Droid Sans',
    'Helvetica Neue',
    'sans-serif',
  ],
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale',
  border: '1px solid #eee',
  borderLeft: '3px solid #41C1F2',
  boxSizing: 'border-box',
});
EventWrapper.defaultProps = {
  itemScope: true,
  itemType: 'http://schema.org/Event',
};

const EventHeader = styled('header')({
  color: '#555',
  fontSize: 12,
});

const EventStartDate = styled('time')({});
EventStartDate.defaultProps = {
  itemProp: 'startDate',
};

const EventTime = styled('span')({});

const EventName = styled('h2')({
  display: 'block',
  marginTop: 10,
  fontSize: 14,
  fontWeight: 600,
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
});
EventName.defaultProps = {
  itemProp: 'name',
};

const EventFooter = styled('footer')({
  display: 'flex',
  flexDirection: 'column',
});

const EventLocation = styled('div')({
  color: '#555',
  fontSize: 12,
});
EventLocation.defaultProps = {
  itemProp: 'location',
  itemScope: true,
  itemType: 'http://schema.org/Place',
};

const LocationName = styled('span')({});
LocationName.defaultProps = {
  itemProp: 'name',
};

const LocationAddress = styled('span')({});
LocationAddress.defaultProps = {
  itemProp: 'address',
  itemScope: true,
  itemType: 'http://schema.org/PostalAddress',
};

const StreetAddress = styled('span')({});
StreetAddress.defaultProps = {
  itemProp: 'streetAddress',
};

const AddressLocality = styled('span')({});
AddressLocality.defaultProps = {
  itemProp: 'addressLocality',
};

const AddressRegion = styled('span')({});
AddressRegion.defaultProps = {
  itemProp: 'addressRegion',
};

const AddressPostalCode = styled('span')({});
AddressPostalCode.defaultProps = {
  itemProp: 'postalCode',
};

const EventOffers = styled('ol')({
  display: 'flex',
  flexDirection: 'column',
  borderTop: '1px solid #eee',
  marginTop: 10,
  marginBottom: 0,
  paddingTop: 10,
  paddingLeft: 0,
});
EventOffers.defaultProps = {
  itemProp: 'offers',
  itemScope: true,
  itemType: 'http://schema.org/Offer',
};

const Offer = styled('li')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  '& + &': {
    marginTop: 10,
  },
});

const OfferPrice = styled('div')({
  color: '#555',
  fontSize: 12,
  marginRight: 10,
});

const OfferPriceValue = styled('span')({});
OfferPriceValue.defaultProps = {
  itemProp: 'price',
};

const OfferPriceCurrency = styled('span')({});
OfferPriceCurrency.defaultProps = {
  itemProp: 'priceCurrency',
};

const OfferURL = styled('a')({
  fontSize: 11,
  color: '#41C1F2',
  textDecoration: 'none',
  textTransform: 'uppercase',
  letterSpacing: '0.02em',
  fontWeight: 700,
});
OfferURL.defaultProps = {
  itemProp: 'url',
};

export const Event = ({ event }) => (
  <EventWrapper>
    <EventHeader>
      <EventStartDate content={event.startDate.toISOString()}>
        {formatDate(event.startDate)}
      </EventStartDate>
      {' — '}
      <EventTime>{formatTime(event.startDate)}</EventTime>
    </EventHeader>
    <EventName>{event.name}</EventName>
    <EventFooter>
      <EventLocation>
        <LocationName>{event.location.name}</LocationName>
        {', '}
        <LocationAddress>
          <StreetAddress>{event.location.address.streetAddress}</StreetAddress>
          {', '}
          <AddressLocality>{event.location.address.addressLocality}</AddressLocality>
          {', '}
          <AddressRegion>{event.location.address.addressRegion}</AddressRegion>
          {' '}
          <AddressPostalCode>{event.location.address.postalCode}</AddressPostalCode>
        </LocationAddress>
      </EventLocation>
      <EventOffers>
        {event.offers.map(offer => (
          <Offer key={offer.url}>
            <OfferPrice>
              <OfferPriceValue content={offer.price}>
                {formatPrice(offer.price, offer.priceCurrency)}
              </OfferPriceValue>
              <OfferPriceCurrency content={offer.priceCurrency} />
            </OfferPrice>
            <OfferURL href={offer.url}>Acheter</OfferURL>
          </Offer>
        ))}
      </EventOffers>
    </EventFooter>
  </EventWrapper>
);

Event.propTypes = {
  event: PropTypes.shape({
    name: PropTypes.string.isRequired,
    startDate: PropTypes.instanceOf(Date).isRequired,
    location: PropTypes.shape({
      name: PropTypes.string.isRequired,
      address: PropTypes.shape({
        streetAddress: PropTypes.string.isRequired,
        addressLocality: PropTypes.string.isRequired,
        addressRegion: PropTypes.string.isRequired,
        postalCode: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
    offers: PropTypes.arrayOf(
      PropTypes.shape({
        url: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        priceCurrency: PropTypes.string.isRequired,
      }).isRequired,
    ),
  }).isRequired,
};
