import React from 'react'

const input = (props) => {
  const {label, error, name, onChangeFields} = props
  const className = error ? 'form-control is-invalid' : 'form-control'
  return (
      <div className='form-group'>
          <label>{label}</label>
          <input 
            className={className} 
            name={name} 
            onChange={onChangeFields} 
            type='text'
          />
          <div className="invalid-feedback">{error}</div>
      </div>
  )
}

export default input