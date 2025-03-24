import React from 'react'
import "./styles/AlertExchanges.css"


function AlertExchangesModal({AlertExch}) {
  return (
    <div className='cont-modal-exchanges'>
      <h1>{AlertExch}</h1>
      <div>
        <h3>Information Book of Exchanges</h3>
        <div className='btn'></div>
        <input className='btnCheckbox' type="checkbox" name="" id="btnCheckbox" />
        <label htmlFor="btnChecbox" className='lblCheckbox'></label>
      </div>
    </div>
  )
}

export default AlertExchangesModal