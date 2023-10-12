import React from 'react'
import Heading from '../../UI/Heading'
import Span from '../../UI/Span'

const index = () => {
  return (
    <div className="review-email w-100 bg-primary mb-5">
        <div className="d-flex h-1 w-1">
            <img src="/assets/check.png" alt="check.png" />
            <div className="">
                <Heading className="text-light"> Revisa tu email </Heading>
                <Span className="text-light"> Te hemos enviado un correo para que reestablezcas tu contraseña </Span>
            </div>
        </div>
    </div>
  )
}

export default index