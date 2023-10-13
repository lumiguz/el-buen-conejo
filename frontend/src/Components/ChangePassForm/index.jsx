// This components includes a form that change the password of your 'El buen conejo' account, here we are using
// UI components like FormSection and Button, their information was passed through props, finally the button type
// submit sends the information to backend

import React, { useState } from 'react'
import FormSection from "../../UI/FormSection"
import Button from '../../UI/Button'

const index = () => {

  const [error, setError] = useState(false)
  const [warning, setWarning] = useState(false)

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
    setError(false)
    setWarning(false)

    if (formData.password !== formData.repeatPass) {
      setError(true)
    } else if (formData.password.length < 8 || formData.repeatPass.length < 8) {
      setWarning(true)
    } else {
      setError(false)
      setWarning(false)
      console.log('Datos a enviar:', formData)
    } 
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
      {error && <p className="text-danger"> Las contraseñas no coinciden </p>}
      {warning && <p className="text-warning"> Las contraseña debe tener 8 caracteres como mínimo</p>}
      <Button type="submit" className="btn-success w-100" children="Cambiar contraseña" />
    </form>
  )
}

export default index