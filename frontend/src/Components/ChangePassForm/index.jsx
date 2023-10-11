// This components includes a form that change the password of your 'El buen conejo' account, here we are using
// UI components like FormSection and Button, their information was passed through props, finally the button type
// submit sends the information to backend

import React from 'react'
import FormSection from "../../UI/FormSection"
import Button from '../../UI/Button'

const index = () => {
  return (
    <form onSubmit={() => console.log("Envío del formulario de cambiar password")}>
      <FormSection 
        type="password" 
        id="examplePassword1" 
        placeholder="Escribe tu contraseña" 
        label="Contraseña" 
      />
      <FormSection 
        type="password" 
        id="repeatPassword1" 
        placeholder="Repite tu contraseña" 
        label="Confirmar contraseña" 
      />
      <Button type="submit" className="btn-primary w-100" children="Submit" />
    </form>
  )
}

export default index