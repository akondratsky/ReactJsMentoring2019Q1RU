const DEFAULT_POSTER_PATH = 'https://pp.userapi.com/c852320/v852320173/c822c/wtYIRZbFP-4.jpg';

const random = (max) => Math.floor( Math.random() * max);

const getTitle = () => {
  const titles = [
    'Alice in black hole',
    'Hello mister doctor',
    'Wonderful world',
    'Jurassic park',
    'Karate kid',
    'Let\'s do it together',
  ];

  return titles[random(titles.length)];
};

const getGenres = () => {
  const allGenres = [
    'Action',
    'Fantasy',
    'Erotic',
    'Drama',
    'Comedy',
    'Sci-fi',
  ];

  const numberOfGenres = random(2) + 1;
  const genres = [];

  for (let i = 0; i < numberOfGenres; i++) {
    genres.push(allGenres[random(allGenres.length)]);
  }

  return genres;
};

const getOverview = () => {
  const overviews = [
    'They all died very fast, and it was amazing',
    'Film about eternal love and power of romantique',
    'He will come to clean your toilet',
    'Everyone should see it',
    'He lost everything. She was very beaty. Their dog was a cat.',
  ];

  return overviews[random(overviews.length)];
};

const getTagline = () => {
  const taglines = [
    'Das ist fantastisch',
    'Come with us',
    '...and cup of coffee',
    'Warm and lovely',
  ];
  return taglines[random(taglines.length)];
};

export const generateFilmStub = () => {
  return {
    id: random(100000),
    title: getTitle(),
    genres: getGenres(),
    release_date: '2019-04-28',
    overview: getOverview(),
    poster_path: DEFAULT_POSTER_PATH,
    revenue: 0,
    runtime: random(120) + 30,
    tagline: getTagline(),
    budget: 100000,
    vote_average: random(10) + random(10)/10,
    vote_count: random(30),
  };
};

const generateFilmsStub = () => {
  const films = [];
  for (let i = 0; i < 10; i++) {
    films.push(generateFilmStub());
  }
  return films;
};

export const generateFilmsResponse = () => ({
  data: generateFilmsStub(),
  total: 3000,
  offset: 0,
  limit: 5,
});
