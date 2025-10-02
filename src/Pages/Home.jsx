import React from 'react'
import NavPages from '../Components/NavPages'
import CardFront from '../Components/CardFront'
import FooterPages from '../Components/FooterPages'

function Home() {
  return (
    <div>
      <nav>
      <NavPages/>
      
      </nav>
      <main>
      <CardFront nombreLibro={"La Sombra del Viento"}  />
      </main>
      <footer>
        <FooterPages/>
        </footer>
    </div>
  )
}

export default Home