// This form is using to recovery your password if you forgot that before, you can type own adress and click on 
// 'Enviar email', an email will send you with the instructions to recovery your account

import React, { useState } from 'react'
import FormSection from "../../UI/FormSection"
import Button from "../../UI/Button"

const index = () => {

    const [formData, setFormData] = useState({
        email: '',
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
                type="email" 
                id="email" 
                placeholder="name@example.com" 
                label="Email" 
                onChange={handleInputChange}
                value={formData.email}
            />
            <Button type="submit" className="btn btn-primary w-100">Enviar email</Button>
        </form>
    )
}

export default index