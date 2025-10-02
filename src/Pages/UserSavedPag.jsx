import React from 'react'
import UserSaved from '../Components/UserSaved'
import NavPages from '../Components/NavPages'
import FooterPages from '../Components/FooterPages'

function UserSavedPag() {
  return (
    
     <div>
        <nav>
         <NavPages/>
        </nav>
        <main>
         <UserSaved/>
        </main>
        <footer>
          <FooterPages/>
        </footer>
    </div>
  )
}

export default UserSavedPag