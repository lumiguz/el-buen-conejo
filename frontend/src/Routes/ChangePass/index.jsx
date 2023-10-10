import React from 'react'
import ChangePassForm from '../../Components/ChangePassForm'
import Heading from '../../UI/Heading'
import Paragraph from '../../UI/Paragraph'

const index = () => {
  return (
    <div className="change-pass w-50 justify-content-center mx-auto border p-3">
        <Heading className="text-center"> Cambia tu contraseña </Heading>
        <Paragraph className="text-center"> Introduce tu nueva contraseña para [email] </Paragraph>
        <ChangePassForm />
    </div>
  )
}

export default index