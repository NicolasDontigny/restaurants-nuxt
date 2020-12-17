const makeApiUrl = url => `${process.env.firebase.baseUrl}/${url}`;

export const apiRoutes = {
  restaurants: {
    getRestaurants: () => makeApiUrl(`restaurants.json`)
  }
};
