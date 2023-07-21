import { Link } from 'react-router-dom';
import { AppRoute } from '../../const ';
import { Helmet } from 'react-helmet-async';


function NotFound(): JSX.Element {
  return (

    <>
      <Helmet>
        <title>6-sities - NotFound</title>
      </Helmet>
      <h1>Ошибка 404.Страница не существует</h1>
      <Link to={AppRoute.Main}>Вернутся на главную</Link>
    </>
  );
}

export default NotFound;
