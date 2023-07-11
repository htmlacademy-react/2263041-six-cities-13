import MainPage from '../../pages/main-page/main-page';

type TAppProps = {
  offersCount: number;
};

function App({ offersCount }: TAppProps): JSX.Element {
  return <MainPage offersCount={offersCount} />;
}

export default App;
