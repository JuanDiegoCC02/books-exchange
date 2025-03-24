import React from 'react'
import HeaderPages from '../Components/HeaderPages'
import CardFront from '../Components/CardFront'
import FooterPages from '../Components/FooterPages'

function Front() {
  return (
    <div>
      <header>
      <HeaderPages/>
      </header>
      <main>
      <CardFront nombreLibro={"La Sombra del Viento"}  />
      </main>
      <footer>
        <FooterPages/>
        </footer>
    </div>
  )
}

export default Front