import React from 'react'

import HeaderPages from '../Components/HeaderPages'
import ContactMain from '../Components/ContactMain'
import FooterPages from '../Components/FooterPages'

function ContactUs() {
  return (
    <div>
        <header>
            <HeaderPages/>
        </header> <br />
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