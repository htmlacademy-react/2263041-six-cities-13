import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const ';
import Main from '../../pages/main-page/main-page';
import Favorites from '../../pages/favorites-page/favorites-page';
import Login from '../../pages/login-page/login-page';
import Offers from '../../pages/offer-page/offer-page';
import NotFound from '../../pages/not-found-page/not-found-page';
import PrivateRoute from '../privet-route/privet-route';


type TAppProps = {
  offersCount: number;
};

function App({ offersCount }: TAppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Main offersCount={offersCount}/>}
        />
        <Route
          path={`${AppRoute.Offers}/:offerId`}
          element={<Offers/>}
        />
        <Route
          path={AppRoute.Login}
          element={<Login/>}
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
              <Favorites/>
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.NotFound}
          element={<NotFound/>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
