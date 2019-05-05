export const getYearFromReleaseDateString = (dateString) => {
  return (dateString && dateString.length > 3) ? dateString.slice(0, 4) : '';
};

export const isServer = typeof window === 'undefined';
