import React from 'react'

import FormLogIn from '../Components/FormLogIn'
import HeaderPages from '../Components/HeaderPages'
import FooterPages from '../Components/FooterPages'

function LogIn() {
  return (
    <div>
      <header>
        <HeaderPages />
      </header>
      <main>
        <FormLogIn />
      </main>
      <footer>
          <FooterPages/>
        </footer>
    </div>
  )
}

export default LogIn