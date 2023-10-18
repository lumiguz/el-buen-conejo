// This register form is using to sign up to our application, you can complete the register putting the inputs
// Name, Lastname, Email and password, the button type submit sends the information to validate to backend
// if everything is ok, you can login at the route /login using these credentials.

import React, { useState } from 'react'
import FormSection from '../../UI/FormSection'
import PasswordSection from '../../UI/PasswordSection'
import Button from '../../UI/Button'
import FormSelect from '../../UI/FormSelect'
import { usuarios } from '../../utils/database'
import { roles } from '../../utils/roles'

const index = () => {

    const correos = usuarios.map(usuario => usuario.email)
    const [alert, setAlert] = useState(false)
    const [error, setError] = useState(false)

    const [formData, setFormData] = useState({
        name: '',
        lastname: '',
        email: '',
        password: '',
        rol: '',
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
        setError(false)
        setAlert(false)
        
        if (correos.includes(formData.email)) {
            setAlert(true)
        } else if (formData.password.length < 8) {
            setError(true)
        } else {
            console.log('Datos a enviar:', formData)
            setError(false)
            setAlert(false)
        }
    };
    
    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3 d-flex justify-content-between">
                <div className="w-100 me-2">
                    <FormSection 
                        type="text"
                        id="name"
                        placeholder="Ingresa tu nombre"
                        label="Nombre"
                        className="w-100 me-2"
                        onChange={handleInputChange}
                        value={formData.name}
                    />
                </div>
                <div className="w-100">
                    <FormSection 
                        type="text"
                        id="lastname"
                        placeholder="Ingresa tu apellido"
                        label="Apellido"
                        className="w-100"
                        onChange={handleInputChange}
                        value={formData.lastname}
                    />
                </div>
            </div>
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
                id="rol"
                value={formData.rol}
                list={roles} 
                onChange={handleInputChange}
            />
            {alert && <p className="text-danger"> El correo ingresado ya tiene una cuenta asociada </p>}
            {error && <p className="text-danger"> La contraseña debe tener más de 8 caracteres </p>}
            <Button type="submit" className="btn-success w-100">Crear cuenta</Button>
        </form>
    )
}

export default index