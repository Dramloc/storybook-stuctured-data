import { getLocale } from './getLocale';

export const formatTime = (date) => {
  const formatter = new Intl.DateTimeFormat(getLocale(), {
    hour: 'numeric',
    minute: 'numeric',
  });
  return formatter.format(date);
};
