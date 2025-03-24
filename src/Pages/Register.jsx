import React from 'react'
import FormRegister from '../Components/FormRegister' 
import HeaderPages from '../Components/HeaderPages'
import FooterPages from '../Components/FooterPages'

function Register() {
  return (
    <div>
      <header>
        <HeaderPages/>
        </header>
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