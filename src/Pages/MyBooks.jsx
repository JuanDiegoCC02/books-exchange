import React from 'react'
import HeaderPages from '../Components/HeaderPages'
import MyBooksCard from '../Components/MyBooksCard'
import FooterPages from '../Components/FooterPages'

function MyBooks() {
  return (
    <div>
        <header>
            <HeaderPages/>
        </header>
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