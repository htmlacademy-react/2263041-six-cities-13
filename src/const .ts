export const Setting = {
  OffersCount: 5,
};


export enum AppRoute {
  Main = '/',
  Login = '/login',
  NotFound = '*',
  Offers = '/offers/',
  Favorites = '/favorites',
}


export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}
