import React from "react";

const CardNotesRabbit = ({ title, content, onDelete }) =>{

  const handleDelete = () => {
    onDelete();
  }; 

    return <>
        <div className="card">
      <h2>{title}</h2>
      <p>{content}</p>
      <button onClick={handleDelete} className="btn btn-danger">Eliminar</button>
    </div>
    </>
}

export default CardNotesRabbit