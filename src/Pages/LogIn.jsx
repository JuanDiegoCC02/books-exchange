import React from 'react'

import FormLogIn from '../Components/FormLogIn'
import HeaderPages from '../Components/HeaderPages'

function LogIn() {
  return (
    <div>
      <header>
        <HeaderPages />
      </header>
      <main>
        <FormLogIn />
      </main>
    </div>
  )
}

export default LogIn