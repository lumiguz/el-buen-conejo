import { useState } from 'react';
import FarmFormStyles from './FarmFormStyles.module.css';

const FarmForm = () => {
  const [farmImage, setFarmImage] = useState(
    '/static/images/littersPlaceHolder.svg'
  );

  const [farmData, setFarmName] = useState({
    avatar: '',
    name: '',
    address: '',
    description: '',
  });

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setFarmName({
      ...farmData,
      [id]: value,
    });
    console.log(farmData);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(farmData);
  };

  return (
    //on submit, save the data of the new litter
    <form
      className={`${FarmFormStyles.formFarm} border rounded px-3 py-4`}
      onSubmit={handleSubmit}
    >
      <h4>Agregar nueva granja</h4>
      <h6 className='fw-normal'>Añade los datos de la granja</h6>
      <label htmlFor='formFile'>
        <h6>Avatar de la granja</h6>
        {/* after upload the image render on component */}
        {/* and convert the image to the size 72x72*/}
        <div className='d-flex align-items-center'>
          <img
            src={farmImage}
            alt='camadaExample'
            className='rounded-circle w-auto'
            width='72'
            height='72'
          />
          {/* if a image is uploaded in the input change the state of the image */}
          <input
            type='file'
            name='avatar'
            id='formFile'
            className={`ms-1  ${FarmFormStyles.inputFileC} form-control-file`}
            onChange={(event) => {
              setFarmImage(URL.createObjectURL(event.target.files[0]));
            }}
          />
        </div>
      </label>

      <div className='mt-2'>
        <div className='d-flex form-row'>
          <div className='form-group col'>
            <label className='form-label' htmlFor='name'>
              Nombre
            </label>
            {/* choose name */}
            <input
              type='text'
              className='form-control'
              name='name'
              id='name'
              onChange={handleInputChange}
            />
          </div>

          <div className='form-group ms-2 col'>
            <label className='form-label' htmlFor='address'>
              Direccion
            </label>
            {/* choose address  */}
            <input
              type='text'
              className='form-control'
              name='address'
              id='address'
              onChange={handleInputChange}
            />
          </div>
        </div>
      </div>

      <div className='mt-2'>
        {/* Add a description for the farm */}
        <div className='d-flex flex-column'>
          <label htmlFor='description' className='form-label' id='address'>
            Descripción
          </label>
          <textarea
            className='form-control'
            name='description'
            id='description'
            rows='3'
            onChange={handleInputChange}
          ></textarea>
        </div>
      </div>

      <div className='mt-3'>
        {/* add and save button */}
        <button className='btn btn-primary me-3' type='submit'>
          Agregar y guardar
        </button>
        {/* cancel button */}
        <button className='btn btn-danger' type='button'>
          Cancelar
        </button>
      </div>
    </form>
  );
};

export default FarmForm;
