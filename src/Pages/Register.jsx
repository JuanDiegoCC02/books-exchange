import React from 'react'
import FormRegister from '../Components/FormRegister' 
import NavPages from '../Components/NavPages'
import FooterPages from '../Components/FooterPages'

function Register() {
  return (
    <div>
      <nav>
        <NavPages/>
        </nav>
        <main>
        <FormRegister/>
        </main>
        <footer>
          <FooterPages/>
        </footer>
    </div>
  )
}

export default Register