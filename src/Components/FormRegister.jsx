import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import llamadoServicios from '../Services/llamados'
import '../Styles/StyleFormReg.css'
import TermCondModal from './Modals/TermCondModal';
import CompleteInfoModal from './Modals/CompleteInfoModal';
import InfoTCmodal from './Modals/InfoTCmodal';

function FormRegister() {

    const [mostrarInfoTC, setMostrarInfoTC] = useState(false);
    const [mostrarError, setMostrarError] = useState(false);
    const [ErrorCampos, setErrorCampos] = useState(false);
   const [Username, setUsername]=useState()
   const [Email, setEmail]=useState()
   const [Password, setPassword]=useState()
   const [Location, setLocation]=useState()
   const [TermCondChecked, setTermCondChecked]=useState(false)
   const eliminarMensaje = () => {
    setMostrarInfoTC(false);
};
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


        if (!TermCondChecked) {
            setMostrarInfoTC(true)
        }
    }

    function registerUser(e) {
        if (!Username || !Email || !Password || !Location) {
            setErrorCampos(true)
        } else  if (!TermCondChecked) {
            setMostrarError(true)
        }
        else {
            llamadoServicios.postUsers(Username, Email, Password, Location, "User")
                navigate ('/LogIn')  
        }
   
    }   


  return (

// Programacion Directa HTML

    <div>

        <h1 className='TituloForm'>Register</h1>
  

     <div className='FormContainer'>
        <div className='inpRegist'>
            <label htmlFor="">Username</label><br />
            <input className='inputText' value={Username} onChange={username} type="text" />
        </div>

        <div className='inpRegist'>
            <label htmlFor="">Email</label><br />
            <input className='inputText' type="email" onChange={email} name="Email" id="Email" />
        </div>

        <div className='inpRegist'>
            <label htmlFor="">Password</label><br />
            <input className='inputText' type="password" onChange={password} name="Password" id="Password" />
        </div>
        
        <div className='inpRegist'>
            <label htmlFor="">Location</label><br />
            <input className='inputText' value={Location} onChange={location} type="text" />
        </div><br />
        
        <div className='inpCheckboxTC'>
            <label className='inpCheckboxTC' htmlFor="">Terms and Conditions</label>
            <input className='inpCheckboxTC' type="checkbox" name="checkbox" id="checkbox" onChange={handleCheckbox} />
        </div><br />

<div>
    <>
        {mostrarInfoTC && (
            <>
                <button className='BtnInfoModal' onClick={eliminarMensaje}>X</button>
                <InfoTCmodal InfoTC={"Esta de Acuerdo con los terminos y condiciones de nuestro Registro y politicas para el uso correcto de Nuestra Pagina."} />
            </>
        )}
    </>  
</div><br />



        <div>
     <input className='BTNRegister' type="button" value="Register" onClick={registerUser} /> 
     </div>

     </div>
            
     <div>    
            {mostrarError &&
            <TermCondModal ErrorTC={"Accept the Terms and Conditions."}/>
            }
        </div><br />
        <div>
        {ErrorCampos &&
            <CompleteInfoModal ErrorCV={"Complete Information"}/>
            }
        </div><br />

<div className='LinkLogIn'>
    <p>Are you already registered?<br /> <Link to= '/LogIn'>Log In</Link></p>
</div>

    </div>
  )
}


export default FormRegister