import React from 'react'
import '../Styles/MyBooksCard.css'
import {useEffect, useState} from 'react'
import llamadosBooks, { updateBooks }  from '../Services/llamadosBooks'


function MyBooksCard() {

  const [books, setBooks]=useState([])  
  const [reload, setReload]=useState(false)
  
  
  const handleBookFavorite = async (id,index)=> {
    const updatedBooks = [...books]
    updatedBooks[index].statusFavorites = !updatedBooks[index].statusFavorites
    await updateBooks(
        {"statusFavorites": updatedBooks[index].statusFavorites}, id)
        setBooks(updatedBooks)
}

  useEffect (()=>{
    async function list() {
        const datos= await llamadosBooks.getBooks("books")
        setBooks(datos)
    }
    list()  
},[reload])

  return (
    <div>
        <div className='titleContainer'>
          <h3 className='subTitleContainer'>Welcome</h3>
          <h3>My favorite Books</h3>
        </div>

        <div className=''>
          <ul className='FullContainer'>
            {books
            .filter((libro)=> libro.statusFavorites===true)
            .map((libro,index)=>(
              <li className='container-Favorite-Book'>
                   <strong>Name</strong><br /> {libro.namebook} <br /><br />
                   <strong>Author</strong><br /> {libro.authorbook} <br /><br />
                   <strong>Category</strong><br /> {libro.categbook} <br /><br />
                   <strong>Information</strong><br /> {libro.infobook} <br /><br />
                   <strong>Usuario</strong><br /> {libro.usuario} <br /><br />
                   <strong>Correo</strong><br /> {libro.correoUsuario} <br /><br />

                   <div>
                    <input className='btnCheckbox'
                     type="checkbox" 
                     name="StateFavorite"
                     id="btnCheckbox" 
                     checked={libro.statusFavorites}
                     onChange={()=>handleBookFavorite(libro.id,index)}
                     /> 
                      <label htmlFor="btnChecbox" className='lblCheckbox'></label>

                     </div><br />
              </li>
            ))}
          </ul>
        </div>
        
    </div>
  )
}

export default MyBooksCard