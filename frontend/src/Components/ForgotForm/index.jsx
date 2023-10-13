// This form is using to recovery your password if you forgot that before, you can type own adress and click on 
// 'Enviar email', an email will send you with the instructions to recovery your account

import React from 'react'
import FormSection from "../../UI/FormSection"
import Button from "../../UI/Button"

const index = () => {
    return (
        <form onSubmit={() => console.log("Envío del formulario de forgot password")}>
            <FormSection 
                type="email" 
                id="exampleEmail1" 
                placeholder="name@example.com" 
                label="Email" 
                onChange={() => {}}
            />
            <Button type="submit" className="btn-success w-100">Enviar email</Button>
        </form>
    )
}

export default index