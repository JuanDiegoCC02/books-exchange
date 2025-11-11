import React from 'react'
import NavPages from '../Components/NavPages'
import FooterPages from '../Components/FooterPages'
import AdminCard from '../Components/AdminCard'

function AdministrationPage() {
  return (
    <div>
        <nav>
        <NavPages/>
        </nav>
        <main>
        <AdminCard/>
        </main>
        <footer>
        <FooterPages/>
        </footer>
    </div>
  )
}

export default AdministrationPage