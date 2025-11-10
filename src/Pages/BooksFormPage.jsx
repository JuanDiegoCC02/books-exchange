import React from 'react'
import NavPages from '../Components/NavPages'
import FormBooks from '../Components/FormBooks'
import FooterPages from '../Components/FooterPages'

function BooksFormPage() {
  return (
    <div>
      <nav>
        <NavPages/>
      </nav>
      <main>
        <FormBooks/>
      </main>
      <footer>
      <FooterPages/>
      </footer>
    </div>
  )
}

export default BooksFormPage