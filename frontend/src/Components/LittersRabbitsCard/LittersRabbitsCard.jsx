import PropTypes from 'prop-types';
import './styles.css';

const LittersRabbitsCard = ({
    rabbitName, 
    rabbitPhoto, 
    rabbitBreed, 
    rabbitWeight, 
    rabbitAge, 
    sold, 
    onClick = () => {},
}) => {
  return (
    <div onClick={() => onClick}
    className='litters-cards d-flex align-items-center border border-secondary-subtle rounded'>
        <div>
            <img src={rabbitPhoto || 'https://dummyimage.com/107x107/000/fff'} alt="" />
        </div>

        <div className='p-2'>
        <div className='card-top ms-2'>
          <h4>{rabbitName}</h4>
          <span className='text-secondary'>{rabbitBreed}</span>
          <hr className='my-2' />
        </div>

        <div className='card-info d-flex ms-2 justify-content-around'>
          <div className='card-info-left mx-2'>
            <h6 className='m-0 fw-bold text-center'>{rabbitWeight}</h6>
            <span>Peso</span>
          </div>

          <div className='card-info-mid mx-2'>
            <h6 className='m-0 fw-bold text-center'>{rabbitAge}</h6>
            <span>Edad</span>
          </div>

          {/* if sold is true render */}
        {sold ? (
            <div className='card-info-right mx-2'>
                <h6 className='m-0 fw-bold text-center'>{sold}</h6>
                <span>Vendido</span>
            </div>
        ) : (
            <div className='card-info-right mx-2'>
                <h6 className='m-0 fw-bold text-center'>{sold}</h6>
                <span>Disponible</span>
            </div>
        )
        }

          {/* <div className='card-info-right mx-2'>
            <h6 className='m-0 fw-bold text-center'>{littersAge}</h6>
            <span>Vendido</span>
          </div> */}
        </div>
      </div>
    </div>

    
  )
}

export default LittersRabbitsCard

LittersRabbitsCard.propTypes = {
    rabbitName: PropTypes.string.isRequired,
    rabbitPhoto: PropTypes.string.isRequired,
    rabbitBreed: PropTypes.string.isRequired,
    rabbitWeight: PropTypes.string.isRequired,
    rabbitAge: PropTypes.string.isRequired,
    sold: PropTypes.bool.isRequired,
    onClick: PropTypes.func,
    size: PropTypes.oneOf(['md', 'xs', 'lg', 'sm']),
    };