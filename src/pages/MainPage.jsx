import { Link } from 'react-router-dom';

const MainPage = () => {
  return (
    <div className="container d-flex flex-column align-items-center gap-5 my-5">
      <h1 className="text-center">Hoşgeldiniz!</h1>
      <img src="https://phoneky.co.uk/thumbs/screensavers/down/fun/bookworm_hwokdjkp.gif" />
      <p className="lead"><Link to="/ürünler" className="text-decoration-none rounded p-2 hover fw-bold bg-light">Kitaplar için tıklayın</Link>
      </p>
    </div>
  );
};

export default MainPage;
