// This components includes a form that change the password of your 'El buen conejo' account, here we are using
// UI components like FormSection and Button, their information was passed through props, finally the button type
// submit sends the information to backend

import React, {useState} from 'react'
import FormSection from "../../UI/FormSection"
import Button from '../../UI/Button'

const index = () => {

  const [formData, setFormData] = useState({
    password: '',
    repeatPass: '',
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({
    ...formData,
    [id]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos a enviar:', formData);
  };


  return (
    <form onSubmit={handleSubmit}>
      <FormSection 
        type="password" 
        id="password" 
        placeholder="************" 
        label="Contraseña" 
        onChange={handleInputChange}
        value={formData.password}
        />
      <FormSection 
        type="password" 
        id="repeatPass" 
        placeholder="************" 
        label="Confirmar contraseña" 
        onChange={handleInputChange}
        value={formData.repeatPass}
      />
      <Button type="submit" className="btn-success w-100" children="Submit" />
    </form>
  )
}

export default index