const urlAvatar = `https://i.pravatar.cc/128`;

// Эмуляция GET /comments/: hotel_id

export const reviewsId0 = [
  {
    comment: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    date: `2019-01-08T13:54:34.569Z`,
    id: 1,
    rating: 1.6,
    user: {
      avatarUrl: `${urlAvatar}?rnd=${Math.random()}`,
      id: 44,
      isPro: true,
      name: `Max`
    }
  },
  {
    comment: `Eine ruhige gemütliche und malerische, die hinter einem Fluss von der einzigartigen Leichtigkeit von Amsterdam versteckt.`,
    date: `2019-03-08T14:13:56.569Z`,
    id: 2,
    rating: 2,
    user: {
      avatarUrl: `${urlAvatar}?rnd=${Math.random()}`,
      id: 40,
      isPro: false,
      name: `Ilya`
    }
  },
  {
    comment: `Тихий уютный и живописный, который скрывается за рекой неповторимой легкостью Амстердама.`,
    date: `2019-06-08T05:34:38.569Z`,
    id: 3,
    rating: 4.8,
    user: {
      avatarUrl: `${urlAvatar}?rnd=${Math.random()}`,
      id: 48,
      isPro: true,
      name: `Alex`
    }
  }
];
