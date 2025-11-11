import React from 'react'
import NavPages from '../Components/NavPages'
import CardHome from '../Components/CardHome'
import FooterPages from '../Components/FooterPages'

function Home() {
  return (
    <div>
      <nav>
      <NavPages/>
      
      </nav>
      <main>
      <CardHome nombreLibro={"La Sombra del Viento"}  />
      </main>
      <footer>
        <FooterPages/>
        </footer>
    </div>
  )
}

export default Home