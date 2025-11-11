import React from 'react'
import UsersNewBooks from '../Components/UsersNewBooks'
import NavPages from '../Components/NavPages'
import FooterPages from '../Components/FooterPages'

function PagUsersNewBooks() {
  return (
    
     <div>
        <nav>
         <NavPages/>
        </nav>
        <main>
         <UsersNewBooks/>
        </main>
        <footer>
          <FooterPages/>
        </footer>
    </div>
  )
}

export default PagUsersNewBooks