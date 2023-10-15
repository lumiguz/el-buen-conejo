import React from "react";

const MenuRabbitNotes =() =>{
    return<>
    <div>
        <div className="mb-3">
  <label for="exampleFormControlTextarea1" className="form-label">Notas</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Escribe las observaciones o informacion importante sobre esta camada"></textarea>
</div>
<div className="row">
        <div className="col-md-12 d-flex justify-content-end">
      <button type="button" class="btn btn-success m-1">Agregar</button>
        </div>
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Todas tus notas</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
    </div>
    </>
}

export default MenuRabbitNotes