import { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import useHttpGetWithPagination from '../../../hooks/useHttpGetWithPagination';
import { apiUrls } from '../../../utils/links';
import styles from './styles.module.css';
import AppLink from '../../../UI/AppLink';

const Index = () => {
  const id = useLoaderData();

  const { isLoading, data, error, sendRequest } = useHttpGetWithPagination();
  useEffect(() => {
    sendRequest(`${apiUrls.urlRabbits}?cage_id=${id.cageId}`);
  }, [sendRequest, id]);

  return (
    <div>
      <AppLink href={`/cage/step2/addrabbit/${id.cageId}`} className="btn btn-success w-25 my-3"> Añadir nuevo conejo </AppLink>
      <h3 className='text-center mt-2'>Conejos detro de la jaula</h3>

      <p className='text-center text-wrap'>Los conejos en las granjas son cuidados de manera meticulosa para garantizar su bienestar. Los agricultores proporcionan un ambiente limpio y seguro, asegurando que tengan acceso a una dieta equilibrada y agua fresca en todo momento. Además, se les brinda refugio adecuado para protegerlos de condiciones climáticas extremas y depredadores. Se monitorea de cerca su salud y se les brinda atención veterinaria cuando es necesario. En resumen, en las granjas, los conejos reciben un cuidado constante y dedicado para asegurar su salud y comodidad.</p>

      <div className='d-flex flex-wrap justify-content-center align-items-center row row-cols-lg-3 row-cols-sm-1 row-cols-md-2 '>
        {isLoading && <p className='text-center'>Loading...</p>}
        {error && <p>{error}</p>}

        {data && data.length === 0 && <h2 className='text-center mt-5 text-danger'>No hay conejos en esta jaula ):</h2>}
        {data &&
          data.map((rabbit) => (
            <div
              key={rabbit.id}
              className={`card ${styles.cardSize} m-4 shadow ${rabbit.genre === 'Hembra' ? styles.backColorF : styles.backColor}`}
            >
              <img
                src={rabbit.photo}
                alt='rabbitProfile'
                className={`card-img-top img-fluid rounded ${styles.imgSize} mt-2`}
              />

              <div className='card-body'>
                <h6 className='card-subtitle mb-2'>
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
