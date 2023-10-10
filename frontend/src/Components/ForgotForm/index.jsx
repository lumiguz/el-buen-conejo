import React from 'react'

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
            <button type="submit" className="btn btn-primary w-100">Enviar email</button>
        </form>
    )
}

export default index