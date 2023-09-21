import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import Card from '../components/Card';
import { useSearchParams } from 'react-router-dom';

const ProductsPage = () => {
    const [books, setBooks] = useState(null);
    const [searchParams, setSearchParams] = useSearchParams();
    const order = searchParams.get('sırala');
    const options = {
        params: {
            _sort: 'title',
            _order: order === 'a-z' ? 'asc' : 'desc',
        },
    };


    useEffect(() => {
        axios
          .get('http://localhost:3090/books', options)
          .then((res) => setBooks(res.data));
      }, [order]);

      const handleChange = (e) => {
        setSearchParams({ sırala: e.target.value});
      };

    return (
        <div>
            {!books ? (
                <div className="text-center my-5">Yükleniyor...</div>
            ) : (
                <>
                    <h3 className=" text-center mx-5 mt-3">{books.length} kitap bulundu</h3>
                    <div className="p-5">
                        <label>Sırala :</label>
                        <span> </span>
                        <select className='rounded mx-2 p-1' onChange={handleChange}>
                            <option hidden>Seçiniz</option>
                            <option>a-z</option>
                            <option>z-a</option>
                        </select>
                    </div>
                    <div className="card-container">
                        {books.map((book) => (
                            <Card key={book.id} book={book} />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default ProductsPage;
