import React from 'react'

const index = ({type, id, placeholder, label, onChange}) => {
  return (
    <div className="mb-3">
        <label htmlFor={id} className="form-label">{label}</label>
        <input 
          type={type} 
          className="form-control" 
          id={id} 
          placeholder={placeholder}
          onChange={onChange}
        />
    </div>
  )
}

export default index