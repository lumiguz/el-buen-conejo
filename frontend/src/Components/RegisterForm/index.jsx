// This register form is using to sign up to our application, you can complete the register putting the inputs
// Name, Lastname, Email and password, the button type submit sends the information to validate to backend
// if everything is ok, you can login at the route /login using these credentials.

import React from 'react'
import FormSection from '../../UI/FormSection'
import Button from '../../UI/Button'
import FormSelect from '../../UI/FormSelect'
import { countries } from '../../utils/countries'

const index = () => {
    return (
        <form onSubmit={() => console.log("Envío del formulario de register")}>
            <div className="mb-3 d-flex justify-content-between">
                <div className="w-100 me-2">
                    <FormSection 
                        type="text"
                        id="inputName1"
                        placeholder="Ingresa tu nombre"
                        label="Nombre"
                        className="w-100 me-2"
                        onChange={() => {}}
                        />
                </div>
                <div className="w-100">
                    <FormSection 
                        type="text"
                        id="inputLastname1"
                        placeholder="Ingresa tu apellido"
                        label="Apellido"
                        className="w-100"
                        onChange={() => {}}
                    />
                </div>
            </div>
            <FormSection 
                type="email" 
                id="exampleEmail1" 
                placeholder="name@example.com" 
                label="Email" 
                onChange={() => {}}
                />
            <FormSection 
                type="password" 
                id="examplePassword1" 
                placeholder="********" 
                label="Password" 
                onChange={() => {}}
                />
            <FormSelect 
                list={countries} 
                onChange={() => {}}
            />
            <Button type="submit" className="btn-success w-100">Crear cuenta</Button>
        </form>
    )
}

export default index