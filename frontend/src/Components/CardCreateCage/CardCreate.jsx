import React from "react";
import "../CardCreateCage/CardCreate.css";

const CardCreate = () => {
    return<>
        <div>
            
            <div>
                <h1 className="instructions-title">1. Registra tus jaulas</h1>
                <p className="instructions-text">Agrega información básica de la jaula como un nombre y un número de lote que sirva para identificarla</p>
                <hr className="instructions-line"></hr>
            </div>

            <div>
                <h1 className="instructions-title">2. Añade los conejos</h1>
                <p className="instructions-text">Agrega tus conejos a su correspondiente jaula y dales una descripción detallada, como su raza, edad y su reproducción</p>
                <hr className="instructions-line"></hr>
            </div>

            <div>
                <h1 className="instructions-title">3. Lleva el control de tu granja</h1>
                <p className="instructions-text2">Realiza un seguimiento de tu granja a través de los reportes para conseguir el mejor rendimiento posible</p>
            </div>

            <div>
                <button className="buttonComenzar"> Comenzar </button>
            </div>

        </div>
    </>
};

export default CardCreate;