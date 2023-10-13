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
        placeholder="***********" 
        label="Contraseña" 
        onChange={() => {}}
        />
      <FormSection 
        type="password" 
        id="repeatPassword1" 
        placeholder="***********" 
        label="Confirmar contraseña" 
        onChange={() => {}}
      />
      <Button type="submit" className="btn-success w-100" children="Submit" />
    </form>
  )
}

export default index