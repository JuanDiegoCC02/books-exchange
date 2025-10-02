import React from 'react'

import FormLogIn from '../Components/FormLogIn'
import NavPages from '../Components/NavPages'
import FooterPages from '../Components/FooterPages'

function LogIn() {
  return (
    <div>

      <nav>
        <NavPages />
      </nav>
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