import React from 'react'

const index = () => {
    return (
        <form onSubmit={() => console.log("Envío del formulario de register")}>
            <div className="mb-3 d-flex justify-content-between">
                <div className="w-100 me-2">
                    <label for="exampleInputName1" className="form-label">Nombre</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    id="exampleInputName1" 
                    aria-describedby="nameHelp" 
                    placeholder="Ingresa tu nombbre"
                    />
                </div>
                <div className="w-100 ms-2">
                    <label for="exampleInputApellido1" className="form-label">Apellido</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    id="exampleInputAppellido1" 
                    aria-describedby="apellidoHelp" 
                    placeholder="Ingresa tu apellido"
                    />
                </div>
            </div>
            <div>
                    <label for="exampleInputEmail1" className="form-label">Email</label>
                    <input 
                    type="email" 
                    className="form-control mb-3" 
                    id="exampleInputEmail1" 
                    aria-describedby="emailHelp" 
                    placeholder="name@example.com"
                    />
                <label for="exampleInputPassword1" className="form-label">Password</label>
                <input 
                type="password" 
                className="form-control mb-3" 
                id="exampleInputPassword1" 
                placeholder="Introduce tu contraseña"
                />
            </div>
                <label for="exampleInputPassword1" className="form-label">Selecciona tu país</label>
            <select className="mb-3 form-select" aria-label="Default select example">
                {/* <option selected>Selecciona un pais</option> */}
                <option value="1">Colombia</option>
                <option value="2">Mexico</option>
                <option value="3">Argentina</option>
                <option value="4">Peru</option>
                <option value="5">Venezuela</option>
            </select>
            <button type="submit" className="btn btn-primary w-100">Crear cuenta</button>
        </form>
    )
}

export default index