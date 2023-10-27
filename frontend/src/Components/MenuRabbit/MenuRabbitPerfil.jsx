import PropTypes from "prop-types";

const MenuRabbitPerfil = ({ rabbitData }) => {
  return (
    <>
      <h5> Datos del conejo: </h5>
      <table className="table">
        <tbody>
          {Object.entries(rabbitData).map(([key, value], index) => {
            if (key) {
              return (
                <tr key={index}>
                  <th
                    scope="row"
                    className={
                      index % 2 === 0 ? "table-secondary" : "table-light"
                    }
                  >
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                  </th>
                  <td>{value}</td>
                </tr>
              );
            }
          })}
        </tbody>
      </table>
    </>
  )
};

MenuRabbitPerfil.propTypes = {
  rabbitData: PropTypes.object.isRequired,
};

export default MenuRabbitPerfil;
