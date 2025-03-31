import React from 'react'
import UserSaved from '../Components/UserSaved'
import HeaderPages from '../Components/HeaderPages'
import FooterPages from '../Components/FooterPages'

function UserSavedPag() {
  return (
    
     <div>
        <header>
         <HeaderPages/>
        </header>
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