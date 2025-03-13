import React from 'react'

function FormRegister() {

   // Programacion Logica JS

  return (

// Programacion Directa HTML

    <div>

        <h1>Register</h1>
     <div className='FormContainer'>
        <div>
            <label htmlFor="">Username:</label><br />
            <input type="text" />
        </div>

        <div>
            <label htmlFor="">Email:</label><br />
            <input type="email" name="email" id="email" />
        </div>

        <div>
            <label htmlFor="">Password:</label><br />
            <input type="password" name="password" id="password" />
        </div>
        
        <div>
            <label htmlFor="">Location:</label><br />
            <input type="text" />
        </div><br />
        
        <div>
            <label htmlFor="">Terminos y Condiciones</label>
            <input type="checkbox" name="checkbox" id="checkbox" />
        </div><br />

        <input type="button" value="Register" />
     </div>

    </div>
  )
}

export default FormRegister