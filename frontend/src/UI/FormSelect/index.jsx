import React from 'react'

const index = ({ list, onChange, id, value }) => {

    return (
        <div className="select-form">
            <label htmlFor={id} className="form-label">Selecciona tu país</label>
            <select id={id} className="mb-3 form-select" aria-label="Default select example" onChange={onChange} value={value}>
                <option value="">Selecciona un país</option>
                {list?.map((country) => <option key={country.id} value={country.name}> {country.name} </option>)}
            </select>
        </div>
    )
}

export default index