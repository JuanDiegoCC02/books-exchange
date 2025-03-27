import React from 'react'
import HeaderPages from '../Components/HeaderPages'
import FormBooks from '../Components/FormBooks'
import FooterPages from '../Components/FooterPages'

function HomeAdm() {
  return (
    <div>
      <header>
        <HeaderPages/>
      </header>
      <main>
        <FormBooks/>
      </main>
      <footer>
      <FooterPages/>
      </footer>
    </div>
  )
}

export default HomeAdm