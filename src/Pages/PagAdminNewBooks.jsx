import React from 'react'
import AdminNewBooks from '../Components/AdminNewBooks'
import NavPages from '../Components/NavPages'
import FooterPages from '../Components/FooterPages'

function PagAdminNewBooks() {
  return (
    <div>
         <nav>
        <NavPages/>
        </nav>
        <main>
        <AdminNewBooks/>
        </main>
        <footer>
        <FooterPages/>
        </footer>
    </div>
  )
}

export default PagAdminNewBooks