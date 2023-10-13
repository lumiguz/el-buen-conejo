// This component includes the form to recovery your password and at header was added to guide the use and this 
// component acts like a route of our website, more specific the route /forgot

import React, { useContext, useState } from 'react'
import ForgotForm from "../../Components/ForgotForm"
import Heading from '../../UI/Heading'
import Paragraph from '../../UI/Paragraph'
import ReviewEmail from '../../Components/ReviewEmail'

const index = () => {

  const [alert, setAlert] = useState(true)

  setTimeout(() => {
    setAlert(false)
  }, 3000);


  return (
    <>
        {alert && <ReviewEmail />}
        <div className="w-50 justify-content-center mx-auto border p-3">
            <Heading className="text-center"> ¿Olvidaste la contraseña? </Heading>
            <Paragraph className="text-center"> 
                Introduce el email que utilizaste al registrarte y te enviaremos
                instrucciones para reestablecer tu contraseña
            </Paragraph>
            <ForgotForm />
        </div>
    </>
  )
}

export default index