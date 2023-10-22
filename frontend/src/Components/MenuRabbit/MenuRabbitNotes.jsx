import React, {useState, useEffect} from "react";
import RabbitForm from "../RabbitForm/RabbitForm";
import CardNotesRabbit from "./CardNotesRabbit";
import useLocalStorage from "./useLocalStorage";

const MenuRabbitNotes =() =>{

  const [inputValue, setInputValue] = useState('');
  const [cards, setCards] = useLocalStorage("menuRabbitNotesData", []);
  

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSaveButtonClick = () => {
    if (inputValue.trim() !== '') {
      const newCard = { title: 'Observacion:', content: inputValue };
      setCards([...cards, newCard]);
      setInputValue('');
    }
  };

    return<>
    <div>
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Escribe las observaciones o informacion importante sobre esta camada"
      />
    </div>
<div className="row">
        <div className="col-md-12 d-flex justify-content-end">
      <button type="button" className="btn btn-success m-1" onClick={handleSaveButtonClick}>Agregar</button>
        </div>
        Todas tus notas:
        {cards.length === 0 ? (
        <p>Aún no hay notas.</p>
      ) : (
        cards.map((card, index) => (
          <CardNotesRabbit key={index} title={card.title} content={card.content} />
        ))
      )}
</div>
<RabbitForm/>
    </div>
    </>
}

export default MenuRabbitNotes