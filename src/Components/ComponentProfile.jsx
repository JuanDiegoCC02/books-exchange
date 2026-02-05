import React, { useEffect, useState } from 'react'
import { getUsers } from '../Services/llamados';
import "../Styles/ComponentProfile.css";

function ComponentProfile() {
    const IdLog = localStorage.getItem("idUsuario");
    const UserLog = localStorage.getItem("nombreUsuario")
    const [user, setUser] = useState(null);
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=> {
        async function obtainUser() {
           try {
                const dataUsers = await getUsers("http://localhost:3000/users");
                console.log ("Users register:",dataUsers)
                console.log ("Id Log:", IdLog)

                const infoUser = dataUsers.find(user => user.id === IdLog) ;
                setUser(infoUser)
                console.log("User Log:", infoUser);
            }catch (error){
                console.error("Failed Id user")
            }
        }

        const fetchBooks = async () => {
        try {
            const response = await fetch ("http://localhost:3000/books");
            const data = await response.json()
            const userBooks = data.filter (book => book.usuario === UserLog)
            const exchangedBooks = userBooks.filter((book)=> book.statusChanged === true)
            setBooks(exchangedBooks)
            setLoading(false)
            console.log(books)

        }catch (error) {
            
        }            
        }
        fetchBooks();
        obtainUser();
    }, [IdLog]);
    if (!user) {
        return <p>loagding user</p>
    }
  return (
    <div>
     <div className='containerTitleProfile'>
       <h4 className='TitleProfile'>Profile</h4>
     </div>
        

    <div className='containerAllProfile'>
      
        <div className='containerInfoProfile'>
            <div className='containerDataUserProfile'><strong className='dataUser'>Username</strong><br />{user.nombre} </div>
            <div className='containerDataUserProfile'><strong className='dataUser'>Email</strong><br />{user.email} </div>
            <div className='containerDataUserProfile'><strong className='dataUser'>Location</strong><br />{user.location} </div>
        </div>

        <div className='containerBooksProfile'><strong className='BookInfoProfile'>Exchanged Books</strong><br />{books.length} </div>
    </div>
    </div>
  )
}

export default ComponentProfile