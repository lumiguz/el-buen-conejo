import { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import useHttpGetWithPagination from '../../../hooks/useHttpGetWithPagination';
import { apiUrls } from '../../../utils/links';
import styles from './styles.module.css';

const Index = () => {
  const id = useLoaderData();
  console.log(id);

  const { isLoading, data, error, sendRequest } = useHttpGetWithPagination();
  useEffect(() => {
    sendRequest(`${apiUrls.urlRabbits}?cage_id=${id.cageId}`);
  }, [sendRequest, id]);
  console.log(data);

  return (
    <div>
      <h3 className='text-center mt-2'>Conejos detro de la jaula: {id.farmId}</h3>

      <div className='d-flex flex-wrap justify-content-center align-items-center row row-cols-lg-3 row-cols-sm-1 row-cols-md-2'>
        {isLoading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {data &&
          data.map((rabbit) => (
            <div
              key={rabbit.id}
              className={`card ${styles.cardSize} m-4 shadow bg-body-tertiary`}
            >
              <img
                src={rabbit.photo}
                alt='rabbitProfile'
                className={`card-img-top img-fluid rounded ${styles.imgSize} mt-2`}
              />

              <div className='card-body'>
                <h6 className='card-subtitle mb-2 text-muted'>
                  <span className='fw-bold'>Raza: </span>
                  {rabbit.breed}
                </h6>
                {/* Genre */}
                <p className='card-text'>
                  <span className='fw-bold'>Genero: </span>
                  {rabbit.genre}
                </p>
                {/* Age */}
                <p className='card-text'>
                  <span className='fw-bold'>Edad: </span>
                  {rabbit.age}
                </p>
                {/* birth date */}
                <p className='card-text'>
                  <span className='fw-bold'>
                    Fecha de Nacimiento: <br />
                  </span>
                  {rabbit.birthday}
                </p>
                {/* Weight */}
                <p className='card-text'>
                  <span className='fw-bold'>Peso: </span>
                  {rabbit.weight}Kg
                </p>
                {/* Price */}
                <p className='card-text'>
                  <span className='fw-bold'>Precio: </span>${rabbit.price} MXN
                </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Index;
