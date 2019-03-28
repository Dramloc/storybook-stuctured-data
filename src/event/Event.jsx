import styled from '@emotion/styled-base';
import PropTypes from 'prop-types';
import React from 'react';
import { formatDate } from './formatDate';
import { formatPrice } from './formatPrice';
import { formatTime } from './formatTime';

const EventWrapper = styled('article')({});
EventWrapper.defaultProps = {
  itemScope: true,
  itemType: 'http://schema.org/Event',
};

const EventStartDate = styled('time')({});
EventStartDate.defaultProps = {
  itemProp: 'startDate',
};

const EventTime = styled('span')({});

const EventName = styled('h2')({});
EventName.defaultProps = {
  itemProp: 'name',
};

const EventLocation = styled('div')({});
EventLocation.defaultProps = {
  itemProp: 'location',
  itemScope: true,
  itemType: 'http://schema.org/Place',
};

const LocationName = styled('span')({});
LocationName.defaultProps = {
  itemProp: 'name',
};

const LocationAddress = styled('div')({});
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

const EventOffers = styled('div')({});
EventOffers.defaultProps = {
  itemProp: 'offers',
  itemScope: true,
  itemType: 'http://schema.org/Offer',
};

const OfferWrapper = styled('div')({});

const OfferPrice = styled('span')({});
OfferPrice.defaultProps = {
  itemProp: 'price',
};

const OfferPriceCurrency = styled('span')({});
OfferPriceCurrency.defaultProps = {
  itemProp: 'priceCurrency',
};

const OfferURL = styled('a')({});
OfferURL.defaultProps = {
  itemProp: 'url',
};

export const Event = ({ event }) => (
  <EventWrapper>
    <EventStartDate content={event.startDate.toISOString()}>
      {formatDate(event.startDate)}
    </EventStartDate>
    <EventTime>{formatTime(event.startDate)}</EventTime>
    <EventName>{event.name}</EventName>
    <EventLocation>
      <LocationName>{event.location.name}</LocationName>
      <LocationAddress>
        <StreetAddress>{event.location.address.streetAddress}</StreetAddress>
        <AddressLocality>{event.location.address.addressLocality}</AddressLocality>
        <AddressRegion>{event.location.address.addressRegion}</AddressRegion>
        <AddressPostalCode>{event.location.address.postalCode}</AddressPostalCode>
      </LocationAddress>
    </EventLocation>
    <EventOffers>
      {event.offers.map(offer => (
        <OfferWrapper key={offer.url}>
          <OfferPrice content={offer.price}>
            {formatPrice(offer.price, offer.priceCurrency)}
          </OfferPrice>
          <OfferPriceCurrency content={offer.priceCurrency} />
          <OfferURL href={offer.url}>Acheter</OfferURL>
        </OfferWrapper>
      ))}
    </EventOffers>
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
