import React, {useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import '../Styles/StyleFormLogIn.css'
import llamadoServicios from '../Services/llamados'



function FormLogIn() {

    const [Username, setUsername]=useState()
    const [Password, setPassword]=useState()
    const [Profiles, setProfiles]=useState()
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
        const found = Profiles.filter(Profiler => Profiler.usrname===Username && Profiler.password===Password)
        
        if (found.leght === 0) {
        alert ("Username or Password invalid")            
        } else {
            Navigate('/HomeAdm')
        }
    }


  return (
    //Parte Directa HTML
<div>

    <h1 className='TituloForm'>Log In</h1>
    <div className='FormContainer'>
        <div>
            <label htmlFor="">Username</label><br />
            <input value={Username} onChange={usrname} type="text" />
        </div>

        <div>
            <label htmlFor="">Password</label><br />
            <input value={Password} onChange={password} type="password" name=""/>
        </div><br />

        <div>
         <input className='BTNRegister' onClick={enter} type="button" value="Log In" />
        </div> 

    </div> <br />



<div className='LinkLogIn'>
    <p>Not registered?<br /> <Link to= '/Register'>Register</Link></p>
</div>

</div>
  )
}

export default FormLogIn