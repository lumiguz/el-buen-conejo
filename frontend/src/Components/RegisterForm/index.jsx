// This register form is using to sign up to our application, you can complete the register putting the inputs
// Name, Lastname, Email and password, the button type submit sends the information to validate to backend
// if everything is ok, you can login at the route /login using these credentials.

import React, {useState} from 'react'
import FormSection from '../../UI/FormSection'
import Button from '../../UI/Button'
import FormSelect from '../../UI/FormSelect'
import { countries } from '../../utils/countries'

const index = () => {

    const [formData, setFormData] = useState({
        name: '',
        lastname: '',
        email: '',
        password: '',
        country: '',
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
            <FormSection 
                type="password" 
                id="password" 
                placeholder="********" 
                label="Password" 
                onChange={handleInputChange}
                value={formData.password}
            />
            <FormSelect 
                id="country"
                value={formData.country}
                list={countries} 
                onChange={handleInputChange}
            />
            <Button type="submit" className="btn-success w-100">Crear cuenta</Button>
        </form>
    )
}

export default index