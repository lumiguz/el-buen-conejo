import React from 'react'

const index = () => {
  return (
    <form onSubmit={() => console.log("Envío del formulario de cambiar password")}>
        <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">Password</label>
            <input 
            type="password" 
            className="form-control" 
            id="exampleInputPassword1" 
            placeholder="Introduce tu contraseña"
            />
        </div>
        <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">Confirm Password</label>
            <input 
            type="password" 
            className="form-control" 
            id="exampleInputPassword1" 
            placeholder="Introduce nuevamente tu contraseña"
            />
        </div>
        <button type="submit" className="btn btn-primary w-100">Submit</button>
    </form>
  )
}

export default index