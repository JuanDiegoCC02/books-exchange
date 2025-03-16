import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import llamadoServicios from '../Services/llamados'
import '../Styles/StyleFormReg.css'

function FormRegister() {

   const [Username, setUsername]=useState()
   const [Email, setEmail]=useState()
   const [Password, setPassword]=useState()
   const [Location, setLocation]=useState()
   const navigate = useNavigate ()

    function username(e) {
        setUsername(e.target.value)
    }
    function email(e) {
        setEmail(e.target.value)
    }
    function password(e) {
        setPassword(e.target.value)
    }
    function location(e) {
        setLocation(e.target.value)
    }

    function registerUser(e) {
        llamadoServicios.postUsers(Username, Email, Password, Location)
    navigate ('/LogIn')
    }   


  return (

// Programacion Directa HTML

    <div>

        <h1 className='TituloForm'>Register</h1>
     <div className='FormContainer'>
        <div>
            <label htmlFor="">Username:</label><br />
            <input value={Username} onChange={username} type="text" />
        </div>

        <div>
            <label htmlFor="">Email:</label><br />
            <input type="email" onChange={email} name="Email" id="Email" />
        </div>

        <div>
            <label htmlFor="">Password:</label><br />
            <input type="password" onChange={password} name="Password" id="Password" />
        </div>
        
        <div>
            <label htmlFor="">Location:</label><br />
            <input value={Location} onChange={location} type="text" />
        </div><br />
        
        <div>
            <label htmlFor="">Terms and Conditions</label>
            <input type="checkbox" name="checkbox" id="checkbox" />
        </div><br />

     </div>
     <div>
     <input className='BTNRegister' type="button" value="Register" onClick={registerUser} /> 
     </div><br />

<div className='LinkLogIn'>
    <p>Are you already registered?<br /> <Link to= '/LogIn'>Log In</Link></p>
</div>

    </div>
  )
}


export default FormRegister