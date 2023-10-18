import React from 'react'

const index = ({ list, onChange, id, value }) => {

    return (
        <div className="select-form">
            <label htmlFor={id} className="form-label">Selecciona tu rol</label>
            <select id={id} className="mb-3 form-select" aria-label="Default select example" onChange={onChange} value={value}>
                <option value="">-</option>
                {list?.map((rol) => <option key={rol.id} value={rol.name}> {rol.name} </option>)}
            </select>
        </div>
    )
}

export default index