import PropTypes from 'prop-types';
import './styles.css';

//Se utiliza de la siguiente manera:
{
  /* <LittersCards littersName="Alex y Mary" littersAge="2" littersImage="" littersWeight="10" littersKit="2"/> */
}

const LittersCard = ({
  littersName,
  littersImage,
  littersKit,
  littersAge,
  littersWeight,
  onClick = () => {},
}) => {
  return (
    <div
      onClick={() => onClick}
      className='litters-cards d-flex align-items-center border border-secondary-subtle rounded'
    >
      <div>
        <img
          src={littersImage || 'https://dummyimage.com/107x107/000/fff'}
          alt='littersImage'
        />
      </div>
      <div className='p-2'>
        <div className='card-top ms-2'>
          <h4>Camada de {littersName}</h4>
          <span className='text-secondary'>California</span>
          <hr className='my-2' />
        </div>

        <div className='card-info d-flex ms-2 justify-content-around'>
          <div className='card-info-left mx-2'>
            <h6 className='m-0 fw-bold text-center'>{littersKit}</h6>
            <span>Crias</span>
          </div>

          <div className='card-info-mid mx-2'>
            <h6 className='m-0 fw-bold text-center'>{littersWeight}</h6>
            <span>Peso</span>
          </div>

          <div className='card-info-right mx-2'>
            <h6 className='m-0 fw-bold text-center'>{littersAge}</h6>
            <span>Edad</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LittersCard;

LittersCard.propTypes = {
  littersName: PropTypes.string.isRequired,
  littersImage: PropTypes.string.isRequired,
  littersKit: PropTypes.string.isRequired,
  littersAge: PropTypes.string.isRequired,
  littersWeight: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  size: PropTypes.oneOf(['md', 'xs', 'lg', 'sm']),
};
