import React from 'react'
import FooterPages from '../Components/FooterPages'
import NavPages from '../Components/NavPages'
import ComponentProfile from '../Components/ComponentProfile'

function Profile() {
  return (
    <div>
     <nav>
      <NavPages/>
      </nav>
      <main>
      <ComponentProfile/>
      </main>
      <footer>
      <FooterPages/>
      </footer>
    </div>
  )
}

export default Profile