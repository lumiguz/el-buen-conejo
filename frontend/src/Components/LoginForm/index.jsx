// This component use some UI elements to construct a form to login to our application, you can login using
// a valid email with their respective password, this information will send to backend and validate, if allright
// you will be in the main view of the website

import React, { useState } from 'react'
import AppLink from '../../UI/AppLink'
import FormSection from '../../UI/FormSection'
import Button from '../../UI/Button'

const index = () => {

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    
    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData({
        ...formData,
        [id]: value,
        });
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Datos a enviar:', formData);
    };
    

    return (
        <form onSubmit={handleSubmit}>
            <FormSection  
                label="Email"
                type="email"
                id="email"
                placeholder="name@example.com"
                onChange={handleInputChange}
                value={formData.email}
            />
            <FormSection  
                label="Password"
                type="password"
                id="password"
                placeholder="**********"
                onChange={handleInputChange}
                value={formData.password}
            />
            <Button type="submit" className="btn-success w-100 my-3">
                Submit
            </Button>
            <AppLink href="/forgot" className="form-check-label" htmlFor="forgotPass">
                ¿Olvidaste la contraseña?
            </AppLink>
        </form>
    )
}

export default index