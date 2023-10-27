// This component use some UI elements to construct a form to login to our application, you can login using
// a valid email with their respective password, this information will send to backend and validate, if allright
// you will be in the main view of the website

import React, { useState, useEffect } from 'react'
import AppLink from '../../UI/AppLink'
import FormSection from '../../UI/FormSection'
import PasswordSection from '../../UI/PasswordSection'
import Button from '../../UI/Button'
import { useNavigate } from 'react-router-dom'
import { useHttp } from '../../hooks/useHttp'

const index = () => {

    const navigate = useNavigate()
    const [alert, setAlert] = useState(false)
    const [formSubmited, setFormSubmited] = useState(false)
    const { isLoading, error, data, sendRequest } = useHttp()

    const [formData, setFormData] = useState({
        username: '',
        password: '',
    }); 

    useEffect(() => {
        if (formSubmited) {
            sendRequest(`https://apiebc.online/login/`, 'POST', formData)
        }
    }, [formSubmited])

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData({
        ...formData,
        [id]: value,
        });
    };
    
    const handleSubmit = (e) => {
        e.preventDefault()
        setFormSubmited(true)

        setTimeout(() => {
            setFormSubmited(false)
        }, 1000);
    };

    if (data) {
        setTimeout(() => {
            navigate('/')
        }, 2000);
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <FormSection  
                label="Nombre de usuario"
                type="text"
                id="username"
                placeholder="username"
                onChange={handleInputChange}
                value={formData.username}
            />
            <PasswordSection  
                id="password"
                label="Password"
                placeholder="**********"
                onChange={handleInputChange}
                value={formData.password}
            />
            {error && <p className="text-danger"> Nombre de usuario o contraseña incorrectos </p>}
            <Button type="submit" className="btn-success w-100 my-3">
                {isLoading ? "..." : "Ingresar"}
            </Button>
            <AppLink href="/forgot" className="form-check-label" htmlFor="forgotPass">
                ¿Olvidaste la contraseña?
            </AppLink>
        </form>
    )
}

export default index