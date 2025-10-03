import React from 'react'
import { useState, useEffect } from 'react'
import llamadosBooks,  {deleteBooks, updateBooks }from '../Services/llamadosBooks'


function UserSavedPag() {
    
    const presentUserEmail = localStorage.getItem("correoUsuario")
    const [search, setSearch] = useState("")
    const [books, setBooks] = useState([])
    const [reload, setReload] = useState(false)

   
   //Const para Favortitos
   const handleBookFavorite = async (id,index)=> {
    const updatedBooks = [...books]
    updatedBooks[index].statusFavorites = !updatedBooks[index].statusFavorites
    await updateBooks(
        {"statusFavorites": updatedBooks[index].statusFavorites}, id)
        setBooks(updatedBooks)
}

  function delet(id) {
    deleteBooks(id)
    setReload(!reload)
  }
   


    useEffect(() => {
        async function list() {
            const datos = await llamadosBooks.getBooks("books")
            setBooks(datos)
        }
        list()
    }, [reload])

    const filteredBooks = books.filter((libro) =>
    libro.namebook.toLowerCase().includes(search.toLowerCase()) ||
    libro.authorbook.toLowerCase().includes(search.toLowerCase()) ||
    libro.categbook.toLowerCase().includes(search.toLowerCase())
    )

  return (
    <div>
    
     <div className='TitleNewsBooks'>
       <h2 className='titleNewBk'>News Books</h2>
    </div>
        <div className='AllContainer'><br />
          <div className='searchAllDiv'>
             <input className='barraSearch' type="search" name="buscador" id="barraSearch" onChange={(e) => setSearch(e.target.value)} />  
             <input className='BTNEnviar' type="button" value="Search" />
         </div><br />

               <ul className='UlBook'>
          {filteredBooks.map((libro, index) => (
            <li key={libro.id} className='LiBook'>
              <div className='containerImg'>
                <img className='BookImg' src={libro.img} alt="BookImg" />
              </div>
              <div className='BookContent'>
                <strong className='BookInfo'>Name</strong> {libro.namebook} <br /><br />
                <strong className='BookInfo'>Author</strong> {libro.authorbook} <br /><br />
                <strong className='BookInfo'>Category</strong> {libro.categbook} <br /><br />
                <strong className='BookInfo'>Information</strong> {libro.infobook} <br /><br />
                <strong className='BookInfo'>Usuario</strong> {libro.usuario} <br /><br />
                <strong className='BookInfo'>Correo</strong> {libro.correoUsuario} <br /><br />
              </div>

              <div>
                <label className='lbFavorites'>Favorites</label>
                <div className='btn'>
                  <input
                    className='btnCheckbox'
                    type="checkbox"
                    checked={libro.statusFavorites}
                    onChange={() => handleBookFavorite(libro.id, index)}
                  />
                  <label htmlFor="btnCheckbox" className='lblCheckbox'></label>
                </div><br />

                {/* Botón Delete solo para dueño */}
                <div>
                  {libro.correoUsuario === presentUserEmail && (
                    <button className='btnDelete' onClick={() => delet(libro.id)}>Delete</button>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
     </div>
 
    </div>
  )
}

export default UserSavedPag