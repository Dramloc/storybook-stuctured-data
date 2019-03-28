import { getLocale } from './getLocale';

export const formatDate = (date) => {
  const formatter = new Intl.DateTimeFormat(getLocale(), {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  return formatter.format(date);
};
