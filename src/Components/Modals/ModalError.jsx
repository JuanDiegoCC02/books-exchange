import React from 'react'
import "./styles/ModalError.css"

function ModalError({Error}) {
  return (
    <div className='cont-modal-error'>
        <h1>{Error}</h1>
    </div>
  )
}

export default ModalError