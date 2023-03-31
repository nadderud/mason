import defaultImage from '/public/img/upload/img_20210703_081612_706.jpg';

const CONFIG = {
  name: 'Nadderud Spidergruppe',

  origin: 'https://nadderud.no',
  basePathname: '/',
  trailingSlash: false,

  title: 'Nadderud Spidergruppe',
  description: 'Spennende friluftsliv for barn og ungdom fra 3. klasse og oppover. Vi er en aktiv speidergruppe med ca. 100 medlemmer som dekker området Nadderud, Bekkestua, Hosle, Eikeli og Haslum.',
  defaultImage: defaultImage,

  defaultTheme: 'light', // Values: "system" | "light" | "dark" | "light:only" | "dark:only"

  language: 'no',
  textDirection: 'ltr',

  dateFormatter: new Intl.DateTimeFormat('no', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    timeZone: 'UTC',
  }),

  blog: {
    disabled: false,
    postsPerPage: 4,

    post: {
      permalink: '/%slug%', // Variables: %slug%, %year%, %month%, %day%, %hour%, %minute%, %second%, %category%
      noindex: false,
      disabled: false,
    },

    list: {
      pathname: 'blog', // Blog main path, you can change this to "articles" (/articles)
      noindex: false,
      disabled: false,
    },

    category: {
      pathname: 'category', // Category main path /category/some-category
      noindex: true,
      disabled: false,
    },

    tag: {
      pathname: 'tag', // Tag main path /tag/some-tag
      noindex: true,
      disabled: false,
    },
  },
};

export const SITE = { ...CONFIG, blog: undefined };