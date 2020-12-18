const makeApiUrl = url =>
  `https://restaurants-aa0cd-default-rtdb.firebaseio.com/${url}`;
// const makeApiUrl = url => `${process.env.firebase.baseUrl}/${url}`;

export const apiRoutes = {
  restaurants: {
    getRestaurants: () => makeApiUrl(`restaurants.json`),
    addRestaurant: () => makeApiUrl(`restaurants.json`),
    removeRestaurant: id => makeApiUrl(`restaurants/${id}.json`)
  }
};
