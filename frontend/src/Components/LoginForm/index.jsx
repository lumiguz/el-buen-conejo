// This component use some UI elements to construct a form to login to our application, you can login using
// a valid email with their respective password, this information will send to backend and validate, if allright
// you will be in the main view of the website

import React from 'react'
import AppLink from '../../UI/AppLink'
import FormSection from '../../UI/FormSection'
import Button from '../../UI/Button'

const index = () => {
    return (
        <form onSubmit={() => console.log("Envío del formulario de login")}>
            <FormSection  
                label="Email"
                type="email"
                id="exampleInputEmail1"
                placeholder="name@example.com"
                onChange={() => {}}
            />
            <FormSection  
                label="Password"
                type="password"
                id="examplePassword1"
                placeholder="**********"
                onChange={() => {}}
            />
            <Button type="submit" className="btn-success w-100 my-3">
                Submit
            </Button>
            <AppLink href="/forgot" className="form-check-label" htmlFor="exampleCheck1">
                ¿Olvidaste la contraseña?
            </AppLink>
        </form>
    )
}

export default index