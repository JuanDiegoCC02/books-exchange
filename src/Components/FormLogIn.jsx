import React, {useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import '../Styles/StyleFormLogIn.css'
import llamadoServicios from '../Services/llamados'
import ModalError from './Modals/ModalError';



function FormLogIn() {
    const [mostrarError,setMostrarError] = useState(false)
    const [Username, setUsername]=useState("")
    const [Password, setPassword]=useState("")
    const [Profiles, setProfiles]=useState([])
    const Navigate = useNavigate ()


    useEffect(()=>{
        async function fetchDataUsers() {
            const datos = await llamadoServicios.getUsers()
            setProfiles(datos)
        };
        fetchDataUsers()
    },[]);

    function usrname(e) {
        setUsername (e.target.value)
    }
    function password(e) {
        setPassword (e.target.value)
    }
    function enter() {
        const found = Profiles.find(Profiler => Profiler.nombre===Username && Profiler.password===Password)
        
        if (found.typeUser === "admin") {
            localStorage.setItem("nombreUsuario",found.nombre)
            localStorage.setItem("correoUsuario",found.email)
            localStorage.setItem("idUsuario",found.id)
            localStorage.setItem("typeUser",found.typeUser)

            Navigate('/HomeAdm')
        }else if (found.typeUser === "user") {
            Navigate('/HomeAdm')            
            localStorage.setItem("typeUser",found.typeUser)

        }
        else {
            setMostrarError(true)
            console.log("incorrecto");
            
        }
    }


  return (
    //Parte Directa HTML
<div>

    <h1 className='TituloForm'>Log In</h1>
    {mostrarError &&
    <ModalError Error={" Username or Password Invalid "}/>
    }
    <div className='FormContainer'>
        <div className='inpLogIn'>
            <label htmlFor="">Username</label><br />
            <input value={Username} onChange={usrname} type="text" />
        </div>

        <div className='inpLogIn'>
            <label htmlFor="">Password</label><br />
            <input value={Password} onChange={password} type="password" name=""/>
        </div><br />

        <div>
         <input className='BTNLogIn' onClick={enter} type="button" value="Log In" />
        </div> 

    </div> 

 
<div className='LinkLogIn'>
    <p>Not registered?<br /> <Link to= '/Register'>Register</Link></p>
</div>

</div>
  )
}

export default FormLogIn