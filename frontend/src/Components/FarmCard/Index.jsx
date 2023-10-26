import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom";

const FarmCard = ({id, photo, name, description, address}) => {

  const navigate = useNavigate();

  return (
    <div>
        {/* <div className='card d-inline-flex flex-column rounded m-3'>
            <img src="https://res.cloudinary.com/deq0czqep/image/upload/v1697685310/farmProfile_fkkin4.jpg" alt="farmProfile" width={'350'} className='img-fluid'/>
            <div className='card-body'>
                <h5 className='card-title'>Nombre de la Granja</h5>
                <p className='card-text'>Descripción corta de la Granja</p>
                <button onClick={()=> navigate(`/farms/${id}`)} className='btn btn-primary'>Ver Granja</button>
            </div>
        </div> */}

        <div className='card d-inline-flex flex-column rounded m-3'>
            <img src={photo} alt="farmProfile" width={'350'} className='img-fluid'/>
            <div className='card-body'>
                <h5 className='card-title'>{name}</h5>
                <p className='card-text'>{description}</p>
                <button onClick={()=> navigate(`/farms/${id}`)} className='btn btn-primary'>Ver Granja</button>
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
    id: PropTypes.number,
}

export default FarmCard