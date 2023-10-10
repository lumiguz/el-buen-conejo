import React from 'react'
import AppLink from '../../UI/AppLink'

const index = () => {
    return (
        <form onSubmit={() => console.log("Envío del formulario de login")}>
            <div class="mb-3">
                <label for="exampleInputEmail1" className="form-label">Email</label>
                <input 
                type="email" 
                className="form-control" 
                id="exampleInputEmail1" 
                aria-describedby="emailHelp" 
                placeholder="name@example.com"
                />
            </div>
            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Password</label>
                <input 
                type="password" 
                className="form-control" 
                id="exampleInputPassword1" 
                placeholder="Introduce tu contraseña"
                />
            </div>
            <button type="submit" className="btn btn-primary w-100">Submit</button>
            <div className="my-3">
                <AppLink href="/" className="form-check-label" for="exampleCheck1">¿Olvidaste la contraseña?</AppLink>
            </div>
        </form>
    )
}

export default index