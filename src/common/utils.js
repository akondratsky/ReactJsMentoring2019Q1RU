// @flow

export const getYearFromReleaseDateString = (dateString: string): string => {
  return (dateString && dateString.length > 3) ? dateString.slice(0, 4) : '';
};

export const isServer = typeof window === 'undefined';
