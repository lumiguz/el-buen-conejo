import React from "react";
import RabbitForm from "../RabbitForm/RabbitForm";

const MenuRabbitPerfil = () =>{
    return <>
    <div>
        <h6> Datos del conejo: </h6>
        <table className="table">
  <thead>
    <tr>
      <th scope="col" className="table-secondary">Estado</th>
      <th scope="col">Vivo</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row" className="table-light">Peso</th>
      <td>8 kg</td>
    </tr>
    <tr>
      <th scope="row" className="table-secondary">Raza</th>
      <td>California</td>
    </tr>
    <tr>
      <th scope="row" className="table-light">Edad</th>
      <td>8 meses</td>
    </tr>
    <tr>
      <th scope="row" className="table-secondary">Color</th>
      <td>Blanco</td>
    </tr>
    <tr>
      <th scope="row" className="table-light">Genotipo</th>
      <td>-</td>
    </tr>
  </tbody>
</table>
    </div>

    <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Editar datos del conejo
</button>

<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <RabbitForm/>
    </div>
  </div>
</div>
    </>
}

export default MenuRabbitPerfil