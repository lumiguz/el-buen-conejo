import React from 'react'
import { countries } from '../../utils/countries'

const index = () => {

    return (
        <div className="select-form">
            <label for="exampleInputPassword1" className="form-label">Selecciona tu país</label>
            <select className="mb-3 form-select" aria-label="Default select example">
                {countries.map((country, index) => <option value={index}> {country} </option>)}
            </select>
        </div>
    )
}

export default index