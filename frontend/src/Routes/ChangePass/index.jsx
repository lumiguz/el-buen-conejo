// This component includes the form to change password and at header was added to guide the use and this 
// component acts like a route of our website, more specific the route /changepass

import React from 'react'
import ChangePassForm from '../../Components/ChangePassForm'
import Heading from '../../UI/Heading'
import Paragraph from '../../UI/Paragraph'
import Navbar from '../../Containers/Navbar'
import Footer from '../../Components/Footer'

const index = () => {
  return (
    <div className="container">
      <Navbar />
      <div className="change-pass w-50 justify-content-center mx-auto border p-3 my-4">
          <Heading className="text-center"> Cambia tu contraseña </Heading>
          <Paragraph className="text-center"> Introduce tu nueva contraseña para [email] </Paragraph>
          <ChangePassForm />
      </div>
      <Footer />
    </div>
  )
}

export default index