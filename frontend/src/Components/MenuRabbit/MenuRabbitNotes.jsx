import React, {useState} from "react";
import RabbitForm from "../RabbitForm/RabbitForm";
import CardNotesRabbit from "./CardNotesRabbit";

const MenuRabbitNotes =() =>{

  const [inputValue, setInputValue] = useState('');
  const [cards, setCards] = useState([]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
  };

  const handleSaveButtonClick = () => {
    if (inputValue.trim() !== '') {
      const newCard = { title: 'Card Title', content: inputValue };
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
        placeholder="Escribe algo..."
      />
    </div>
<div className="row">
        <div className="col-md-12 d-flex justify-content-end">
      <button type="button" class="btn btn-success m-1" onClick={handleSaveButtonClick}>Agregar</button>
        </div>
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Todas tus notas</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3">
  {cards.map((card, index) => (
        <CardNotesRabbit key={index} title={card.title} content={card.content} />
      ))}
  </textarea>
</div>
<RabbitForm/>
    </div>
    </>
}

export default MenuRabbitNotes