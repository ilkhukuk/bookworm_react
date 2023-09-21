import { useLocation } from 'react-router-dom';

const UndefinedPage = () => {
  // başka bir sayfadan gönderilen veriye erişme
  const { state } = useLocation();

  return (
    <div style={{ height: '80vh' }} className="my-3 d-flex flex-column justify-content-center align-items-center">
      <span className='my-4 fs-3'>Oooopppss!..</span>
      <img style={{width: '350px'}} className='rounded'
        src="https://as2.ftcdn.net/v2/jpg/04/05/74/91/1000_F_405749149_6ciTOhjw1RbfJnlX1a6yQm2YxA3TIgLE.jpg"
      />
      <p className="text-center fs-3 my-5">
        Üzgünüz, arağınız sayfa bulunamadı
      </p>

      {state && (
        <p className="fs-3 text-center">
          Hata Kodunuz :
          <span className="badge bg-warning mx-3">{state}</span>
        </p>
      )}
    </div>
  );
};

export default UndefinedPage;
