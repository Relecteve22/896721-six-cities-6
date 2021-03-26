const urlAvatar = `https://i.pravatar.cc/128`;

export const offers = [
  {
    bedrooms: 1,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      },
      name: `Amsterdam`
    },
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    goods: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Dishwasher`],
    host: {
      avatarUrl: `${urlAvatar}?rnd=${Math.random()}`,
      id: 1,
      isPro: true,
      name: `Angelina`
    },
    id: 1,
    images: [`http://picsum.photos/248/152?r=${Math.random()}`, `http://picsum.photos/248/152?r=${Math.random()}`, `http://picsum.photos/248/152?r=${Math.random()}`],
    isFavorite: true,
    isPremium: false,
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8
    },
    maxAdults: 5,
    previewImage: `http://picsum.photos/248/152?r=${Math.random()}`,
    price: 1200,
    rating: 2.3,
    title: `素晴らしい場所に美しく、豪華なスタジオ`,
    type: `apartment`
  },
  {
    bedrooms: 4,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      },
      name: `Amsterdam`
    },
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    goods: [`Washing machine`, `Coffee machine`, `Dishwasher`],
    host: {
      avatarUrl: `${urlAvatar}?rnd=${Math.random()}`,
      id: 2,
      isPro: true,
      name: `Angelina`
    },
    id: 2,
    images: [`http://picsum.photos/248/152?r=${Math.random()}`, `http://picsum.photos/248/152?r=${Math.random()}`, `http://picsum.photos/248/152?r=${Math.random()}`],
    isFavorite: false,
    isPremium: true,
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8
    },
    maxAdults: 4,
    previewImage: `http://picsum.photos/248/152?r=${Math.random()}`,
    price: 34355,
    rating: 0.4,
    title: `Schöne und luxuriöse studio in great location`,
    type: `apartment`
  },
  {
    bedrooms: 5,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      },
      name: `Amsterdam`
    },
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    goods: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`],
    host: {
      avatarUrl: `${urlAvatar}?rnd=${Math.random()}`,
      id: 3,
      isPro: true,
      name: `Angelina`
    },
    id: 3,
    images: [`http://picsum.photos/248/152?r=${Math.random()}`, `http://picsum.photos/248/152?r=${Math.random()}`, `http://picsum.photos/248/152?r=${Math.random()}`],
    isFavorite: false,
    isPremium: false,
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8
    },
    maxAdults: 55,
    previewImage: `http://picsum.photos/248/152?r=${Math.random()}`,
    price: 2334,
    rating: 5,
    title: `Beautiful & luxurious studio at great location`,
    type: `apartment`
  },
  {
    bedrooms: 9,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      },
      name: `Amsterdam`
    },
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    goods: [`Heating`, `Kitchen`, `Washing machine`, `Coffee machine`, `Dishwasher`],
    host: {
      avatarUrl: `${urlAvatar}?rnd=${Math.random()}`,
      id: 4,
      isPro: false,
      name: `Angelina`
    },
    id: 4,
    images: [`http://picsum.photos/248/152?r=${Math.random()}`, `http://picsum.photos/248/152?r=${Math.random()}`, `http://picsum.photos/248/152?r=${Math.random()}`],
    isFavorite: true,
    isPremium: true,
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8
    },
    maxAdults: 55,
    previewImage: `http://picsum.photos/248/152?r=${Math.random()}`,
    price: 2334,
    rating: 4.5,
    title: `Beautiful & luxurious studio at great location`,
    type: `apartment`
  }
];
