import React from 'react'


function FormLogIn() {

    //Parte Logica JS

  return (
    //Parte Directa HTML
<div>

    <h1>Log In</h1>
    <div className='FormContainer'>
        <div>
            <label htmlFor="">Username:</label><br />
            <input type="text" />
        </div>

        <div>
            <label htmlFor="">Password:</label><br />
            <input type="password" name="password" id="password" />
        </div><br />

        <input type="button" value="Log In" />
    </div>

</div>
  )
}

export default FormLogIn