import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import llamadoServicios from '../Services/llamados'
import '../Styles/StyleFormReg.css'
import TermCondModal from './Modals/TermCondModal';


function FormRegister() {

    const [mostrarError, setMostrarError] = useState(false);
   const [Username, setUsername]=useState()
   const [Email, setEmail]=useState()
   const [Password, setPassword]=useState()
   const [Location, setLocation]=useState()
   const [TermCondChecked, setTermCondChecked]=useState(false)
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
    function handleCheckbox(e) {
        setTermCondChecked(e.target.checked)
    }

    function registerUser(e) {
        if (!TermCondChecked) {
            setMostrarError(true)
        } else {
            llamadoServicios.postUsers(Username, Email, Password, Location, "User")
            navigate ('/LogIn')  
        }
   
    }   


  return (

// Programacion Directa HTML

    <div>

        <h1 className='TituloForm'>Register</h1>
         
        <div>    
            {mostrarError &&
            <TermCondModal ErrorTC={"Accept the Terms and Conditions."}/>
            }
        </div>

     <div className='FormContainer'>
        <div className='inpRegist'>
            <label htmlFor="">Username</label><br />
            <input  value={Username} onChange={username} type="text" />
        </div>

        <div className='inpRegist'>
            <label htmlFor="">Email</label><br />
            <input  type="email" onChange={email} name="Email" id="Email" />
        </div>

        <div className='inpRegist'>
            <label htmlFor="">Password</label><br />
            <input  type="password" onChange={password} name="Password" id="Password" />
        </div>
        
        <div className='inpRegist'>
            <label htmlFor="">Location</label><br />
            <input  value={Location} onChange={location} type="text" />
        </div><br />
        
        <div>
            <label htmlFor="">Terms and Conditions</label>
            <input type="checkbox" name="checkbox" id="checkbox" onChange={handleCheckbox} />
        </div><br />

        <div>
     <input className='BTNRegister' type="button" value="Register" onClick={registerUser} /> 
     </div>

     </div>
     

<div className='LinkLogIn'>
    <p>Are you already registered?<br /> <Link to= '/LogIn'>Log In</Link></p>
</div>

    </div>
  )
}


export default FormRegister