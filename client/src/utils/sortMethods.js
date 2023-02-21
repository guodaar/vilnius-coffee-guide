export const sortMethods = {
  none: { method: (a, b) => null },
  starsDesc: {
    method: (a, b) => (a.rating > b.rating ? 1 : a.rating < b.rating ? -1 : 0),
  },
  starsAsc: {
    method: (a, b) => (a.rating > b.rating ? -1 : a.rating < b.rating ? 1 : 0),
  },
  nameDesc: { method: (a, b) => (a.name > b.name ? 1 : -1) },
  nameAsc: { method: (a, b) => (a.name > b.name ? -1 : 1) },
  rateDesc: {
    method: (a, b) =>
      a.rating_avg > b.rating_avg ? 1 : a.rating_avg < b.rating_avg ? -1 : 0,
  },
  rateAsc: {
    method: (a, b) =>
      a.rating_avg > b.rating_avg ? -1 : a.rating_avg < b.rating_avg ? 1 : 0,
  },
};
