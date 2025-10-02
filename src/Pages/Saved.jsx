import React from 'react'
import SavedR from '../Components/SavedR'
import NavPages from '../Components/NavPages'
import FooterPages from '../Components/FooterPages'

function Saved() {
  return (
    <div>
         <nav>
        <NavPages/>
        </nav>
        <main>
        <SavedR/>
        </main>
        <footer>
        <FooterPages/>
        </footer>
    </div>
  )
}

export default Saved