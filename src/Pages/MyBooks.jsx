import React from 'react'
import NavPages from '../Components/NavPages'
import MyBooksCard from '../Components/MyBooksCard'
import FooterPages from '../Components/FooterPages'

function MyBooks() {
  return (
    <div>
        <nav>
            <NavPages/>
        </nav>
        <main>
            <MyBooksCard/>
        </main>
        <footer>
            <FooterPages/>
        </footer>
    </div>
  )
}

export default MyBooks