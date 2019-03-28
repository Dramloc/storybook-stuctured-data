import { getLocale } from './getLocale';

export const formatPrice = (price, currency) => {
  const formatter = new Intl.NumberFormat(getLocale(), {
    style: 'currency',
    currency,
  });
  return formatter.format(price);
};
