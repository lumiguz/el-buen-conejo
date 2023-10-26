import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom";

const FarmCard = ({id, photo, name, description, address}) => {

  const navigate = useNavigate();

  return (
    <div>
        <div className={`card d-inline-flex flex-column rounded m-3 shadow bg-body-tertiary rounded `}>
            <img src={photo} alt="farmProfile" width='auto' className={`img-fluid`}/>
            <div className='card-body'>
                <h5 className='card-title'>{name}</h5>
                <p className='card-text'>{description}</p>
                <p className='card-text'>{address}</p>
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
    id: PropTypes.string,
    photo: PropTypes.string,
}

export default FarmCard