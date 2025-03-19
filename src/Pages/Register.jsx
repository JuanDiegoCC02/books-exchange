import React from 'react'
import FormRegister from '../Components/FormRegister' 
import HeaderPages from '../Components/HeaderPages'

function Register() {
  return (
    <div>
      <header>
        <HeaderPages/>
        </header>
        <main>
        <FormRegister/>
        </main>
    </div>
  )
}

export default Register