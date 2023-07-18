import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const ';


function NotFound(): JSX.Element {
  return (

    <div>
      <Helmet>
        <title>6 cities - Not Found</title>
      </Helmet>
      <h1>Ошибка 404. <br>Страница не существует.</br></h1>
      <Link to={AppRoute.Main}>Вернутся на главную</Link>
    </div>
  );
}

export default NotFound;
