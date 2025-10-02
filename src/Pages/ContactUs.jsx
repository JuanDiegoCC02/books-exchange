import React from 'react'

import NavPages from '../Components/NavPages'
import ContactMain from '../Components/ContactMain'
import FooterPages from '../Components/FooterPages'

function ContactUs() {
  return (
    <div>
        <nav>
            <NavPages/>
        </nav> <br />
        <main>
          <ContactMain/>
        </main>
        <footer>
         <FooterPages/>
        </footer>
    </div>
  )
}

export default ContactUs