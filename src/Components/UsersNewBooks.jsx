import React from 'react'
import { useState, useEffect } from 'react'
import llamadosBooks,  {deleteBooks, updateBooks }from '../Services/llamadosBooks'
import BookProfileExtend from './BookProfileExtend'


function UsersNewBooks() {
    
    const presentUserEmail = localStorage.getItem("correoUsuario")
    const [search, setSearch] = useState("")
    const [books, setBooks] = useState([])
    const [reload, setReload] = useState(false)
    const [selectedUser, setSelectedUser] = useState(null)

   
   //Const from Favorites
   const handleBookFavorite = async (id,index)=> {
    const updatedBooks = [...books]
    updatedBooks[index].statusFavorites = !updatedBooks[index].statusFavorites
    await updateBooks(
        {"statusFavorites": updatedBooks[index].statusFavorites}, id)
        setBooks(updatedBooks)
}
const handleBookChanged = async (id, index)=> {
  const updatedBooks = [...books]
  updatedBooks[index].statusChanged = !updatedBooks[index].statusChanged
  await updateBooks(
    {"statusChanged": updatedBooks[index].statusChanged}, id)
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
                <img className='BookImg' onClick={()=> setSelectedUser(libro.usuario)} src={libro.img} alt="BookImg" />
              </div>
              <div className='BookContent'>
                <strong className='BookInfo'>Title</strong> {libro.namebook} <br /><br />
                <strong className='BookInfo'>Author</strong> {libro.authorbook} <br /><br />
                <strong className='BookInfo'>Category</strong> {libro.categbook} <br /><br />
                <strong className='BookInfo'>Information</strong> {libro.infobook} <br /><br />
                <strong className='BookInfo'>Username</strong><a onClick={()=> setSelectedUser(libro.usuario)}> {libro.usuario}</a><br />
                <strong className='BookInfo'>Email</strong> {libro.correoUsuario} <br /><br />
              </div>

            {/*Btn favorites styles in mybooks */}
              <div>
                <label className='lbFavorites'>Books Favorites</label>
                <div className='btn'>
                  <input
                    id="btnCheckbox"
                    className='btnCheckbox'
                    type="checkbox"
                    checked={libro.statusFavorites}
                    onChange={() => handleBookFavorite(libro.id, index)}
                  />
                  <label htmlFor="btnCheckbox" className='lblCheckbox'></label>
                </div><br />



                {/* Btn Delete Creator */}
                 <div>
                 
                  {libro.correoUsuario === presentUserEmail && (
                  <>
                    <button className='btnDelete' onClick={() => delet(libro.id)}>Book Delete</button>
                  </>
                  )}
                 </div>

                  <div><br /><br />
               
                  {libro.correoUsuario === presentUserEmail && (
                     <>
                      <label className='lbFavorites' htmlFor="">Exchange Completed</label><br />
                      <div className='btnChanged'>
                      <input 
                      id='btnCheckboxChanged'
                      className='btnCheckboxChanged' type="checkbox" 
                      checked={libro.statusChanged}
                      onChange={()=> handleBookChanged(libro.id, index)}
                        />
                        <label htmlFor="" className='lblCheckboxChanged'></label>
                      </div>
                        
                    </>
                   )}
                  </div>

              </div>
            </li>
          ))}
        </ul>
     </div>
        {selectedUser && (
        <BookProfileExtend
        usuario={selectedUser}
        onClose={() => setSelectedUser(null)}
        />
      )}
    </div>
  )
}

export default UsersNewBooks