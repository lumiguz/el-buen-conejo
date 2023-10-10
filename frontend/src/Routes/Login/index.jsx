import React from 'react'
import LoginForm from "../../Components/LoginForm"
import Heading from '../../UI/Heading'
import Paragraph from '../../UI/Paragraph'
import AppLink from '../../UI/AppLink'

const index = () => {
  return (
    <div className="w-50 justify-content-center mx-auto border p-3">
        <Heading className="text-center"> Inicia sesión en El buen conejo </Heading>
        <Paragraph className="text-center"> 
            ¿Aun no tienes cuenta? &nbsp;
            <AppLink href="/register">Registrate ahora</AppLink>
        </Paragraph>
        <LoginForm />
    </div>
  )
}

export default index