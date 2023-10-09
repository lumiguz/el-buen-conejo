import PropTypes from 'prop-types';
import './styles.css';

const LittersCards = ({
  littersName,
  littersImage,
  littersKit,
  littersAge,
  littersWeight,
  onClick = () => {},
}) => {
  return (
    <div onClick={() => onClick} className='litters-cards p-2 d-flex align-items-center border border-secondary-subtle rounded'>
      <div>
        <img
          src={littersImage || 'https://dummyimage.com/107x107/000/fff'}
          alt='littersImage'
        />
      </div>
      <div>
        <div className='card-top ms-2'>
          <h4>Camada de {littersName}</h4>
          <span>California</span>
          <hr className='my-2' />
        </div>

        <div className='card-info d-flex ms-2 justify-content-around'>
          <div className='card-info-left mx-2'>
            <p className='m-0 fw-bold text-center'>{littersKit}</p>
            <span>Crias</span>
          </div>

          <div className='card-info-mid mx-2'>
            <p className='m-0 fw-bold text-center'>{littersWeight}</p>
            <span>Peso</span>
          </div>

          <div className='card-info-right mx-2'>
            <p className='m-0 fw-bold text-center'>{littersAge}</p>
            <span>edad</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LittersCards;

LittersCards.propTypes = {
  littersName: PropTypes.string.isRequired,
  littersImage: PropTypes.string.isRequired,
  littersKit: PropTypes.string.isRequired,
  littersAge: PropTypes.string.isRequired,
  littersWeight: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  size: PropTypes.oneOf(['md', 'xs', 'lg', 'sm']),
};
