import React from 'react'
import { useNavigate } from 'react-router-dom';


function ComponentCloseSS() {
      const navigate = useNavigate()
  const closeUser = () => {
    localStorage.clear();
    navigate('/LogIn'); // Redirige a la página de inicio de sesión
  };
  return (
    <div>




        
        <div className='containerCloseProfile'>
            <button className='BtnCloseCS' id='CloseCS'onClick={closeUser} >Close Session </button>
        </div>


    </div>
  )
}

export default ComponentCloseSS