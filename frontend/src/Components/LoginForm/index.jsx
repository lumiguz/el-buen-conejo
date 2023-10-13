// This component use some UI elements to construct a form to login to our application, you can login using
// a valid email with their respective password, this information will send to backend and validate, if allright
// you will be in the main view of the website

import React, { useState } from 'react'
import AppLink from '../../UI/AppLink'
import FormSection from '../../UI/FormSection'
import Button from '../../UI/Button'
import { usuarios } from '../../utils/database'
import { useNavigate } from 'react-router-dom'

const index = () => {

    const navigate = useNavigate()
    const [alert, setAlert] = useState(false)

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

        e.preventDefault()
        setAlert(false)

        let index = usuarios.map(usuario => usuario.email).indexOf(formData.email)

        index == -1 ? index = 0 : index = index

        if (usuarios[index].contraseña === formData.password) {
            console.log('Datos a enviar:', formData);
            localStorage.setItem('logedAccount', JSON.stringify(formData))
            navigate('/')
        } else {
            setAlert(true)
        }
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
            {alert && <p className="text-danger"> Correo electrónico o contraseña incorrectos </p>}
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