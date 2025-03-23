import React from 'react'
import "./styles/TermCondModal.css"

function TermCondModal({ErrorTC}) {
  return (
    <div>
        <div className='Term-Cond-Modal'>
            <h1>{ErrorTC}</h1>
        </div>
    </div>
  )
}

export default TermCondModal