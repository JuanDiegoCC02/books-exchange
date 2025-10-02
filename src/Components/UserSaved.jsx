import React from 'react'
import { useState, useEffect } from 'react'
import llamadosBooks,  {updateBooks }from '../Services/llamadosBooks'


function UserSavedPag() {
    
   
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

   


    useEffect(() => {
        async function list() {
            const datos = await llamadosBooks.getBooks("books")
            setBooks(datos)
        }
        list()
    }, [reload])
  return (
    <div>
    
     <div className='TitleNewsBooks'>
       <h2 className='titleNewBk'>News Books</h2>
    </div>
        <div className='AllContainer'><br />
          <div className='searchAllDiv'>
             <input className='barraSearch' type="search" name="buscador" id="barraSearch" />  <input className='BTNEnviar' type="button" value="Search" />
         </div><br />
             <ul className='UlBook'>
              {books.map((libro, index) => (
                <li key={libro.id} className='LiBook'>
                    <div className='containerImg'>
                     <img className='BookImg' src={libro.img} alt="BookImg" />
                     </div>
                     <div className='BookContent'>
                         <strong  className='BookInfo'>Name</strong>  {libro.namebook} <br /><br /><br />
                         <strong className='BookInfo'>Author</strong> {libro.authorbook} <br /><br /><br />
                         <strong className='BookInfo'>Category</strong> {libro.categbook} <br /><br /><br />
                         <strong className='BookInfo'>Information</strong> {libro.infobook} <br /><br /><br />
                         <strong className='BookInfo'>Usuario</strong> {libro.usuario} <br /><br /><br />
                         <strong className='BookInfo'>Correo</strong> {libro.correoUsuario} <br /><br /><br />
                    </div>
                     <div>     
                     <label className='lbFavorites' htmlFor="">Favorites</label>
                      <div className='btn'>
                       <input className='btnCheckbox' type="checkbox" name=""
                         id="btnCheckbox"
                        checked={libro.statusFavorites}
                        onChange={() =>handleBookFavorite(libro.id,index)}
                         /> 
                         <label htmlFor="btnChecbox" className='lblCheckbox'></label>
                        </div><br />

                        
                         </div>
                    </li>
                 ))}
            </ul>
     </div>
 
    </div>
  )
}

export default UserSavedPag