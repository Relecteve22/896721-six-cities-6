const urlAvatar = `https://i.pravatar.cc/128`;

// Эмуляция GET /hotels/: hotel_id/nearby

export const offersNearbyId0 = [
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
      latitude: 52.369553943508,
      longitude: 4.85309666406198,
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
    bedrooms: 2,
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
    isPremium: true,
    location: {
      latitude: 52.3909553943600,
      longitude: 4.929309666406304,
      zoom: 8
    },
    maxAdults: 3,
    previewImage: `http://picsum.photos/248/152?r=${Math.random()}`,
    price: 23,
    rating: 2.4,
    title: `Домик на досках`,
    type: `room`
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
    isPremium: false,
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 8
    },
    maxAdults: 100,
    previewImage: `http://picsum.photos/248/152?r=${Math.random()}`,
    price: 2,
    rating: 0.8,
    title: `house`,
    type: `house`
  }
];
