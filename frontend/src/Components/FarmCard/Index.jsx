import PropTypes from 'prop-types';

const FarmCard = ({avatar, name, description }) => {
  return (
    <div>
        <div className='card d-inline-flex flex-column rounded m-3'>
            <img src="https://res.cloudinary.com/deq0czqep/image/upload/v1697685310/farmProfile_fkkin4.jpg" alt="farmProfile" width={'350'} className='img-fluid'/>
            <div className='card-body'>
                <h5 className='card-title'>Nombre de la Granja</h5>
                <p className='card-text'>Descripción corta de la Granja</p>
                <a href="#" className='btn btn-primary'>Ver Granja</a>
            </div>
        </div>
    </div>
  )
}

FarmCard.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    address: PropTypes.string,
}

export default FarmCard