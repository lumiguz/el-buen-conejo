// This register form is using to sign up to our application, you can complete the register putting the inputs
// Name, Lastname, Email and password, the button type submit sends the information to validate to backend
// if everything is ok, you can login at the route /login using these credentials.

import React, { useEffect, useState } from 'react'
import FormSection from '../../UI/FormSection'
import PasswordSection from '../../UI/PasswordSection'
import Button from '../../UI/Button'
import FormSelect from '../../UI/FormSelect'
import { roles } from '../../utils/roles'
import { useHttp } from '../../hooks/useHttp'
import { useNavigate } from 'react-router-dom'
import { apiUrls } from '../../utils/links'

const index = () => {

    const [warning, setWarning] = useState(false)
    const [formSubmited, setFormSubmited] = useState(false)
    const { isLoading, error, data, sendRequest, isntOk } = useHttp()
    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        is_producer: "",
    });

    useEffect(() => {
        if (formSubmited) {
            sendRequest(`${apiUrls.urlUsers}`, 'POST', formData)
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
        setWarning(false)

        if (formData.password.length < 8) {
            setWarning(true)
        } else {
            console.log('Datos a enviar:', formData)
            setFormSubmited(true)
            setWarning(false)
        }
    };

    if (data) {
        setTimeout(() => {
            navigate('/login')
        }, 2000);
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <FormSection 
                type="text"
                id="username"
                placeholder="Granjero12"
                label="Username"
                className="w-100"
                onChange={handleInputChange}
                value={formData.username}
            />
            <FormSection 
                type="email" 
                id="email" 
                placeholder="name@example.com" 
                label="Email" 
                onChange={handleInputChange}
                value={formData.email}
            />
            <PasswordSection 
                id="password" 
                placeholder="********" 
                label="Password" 
                onChange={handleInputChange}
                value={formData.password}
            />
            <FormSelect 
                id="is_producer"
                value={formData.is_producer}
                list={roles} 
                onChange={handleInputChange}
            />
            {warning && <p className="text-danger"> La contraseña debe tener más de 8 caracteres </p>}
            {isntOk && <p className="text-danger"> {Object.values(Object.values(isntOk)[1])[0][0]} </p>}
            <Button type="submit" className="btn-success w-100">{isLoading ? "..." : "Crear cuenta"}</Button>
        </form>
    )
}

export default index