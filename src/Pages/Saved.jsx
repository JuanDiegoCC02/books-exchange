import React from 'react'
import SavedR from '../Components/SavedR'
import HeaderPages from '../Components/HeaderPages'
import FooterPages from '../Components/FooterPages'

function Saved() {
  return (
    <div>
         <header>
        <HeaderPages/>
        </header>
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