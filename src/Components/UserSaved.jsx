import React from 'react'
import { useState, useEffect } from 'react'
import llamadosBooks from '../Services/llamadosBooks'


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
          <div>
            <div>

                <div className='AllContainer'><br />
                    <div className='TitleNewsBooks'><h2>News Books</h2> </div>
                    <div className='searchAllDiv'>
                        <input className='barraSearch' type="search" name="buscador" id="barraSearch" />  <input className='BTNEnviar' type="button" value="Search" />
                    </div>

                    <ul className='containerNewsBooks'>

                        {books.map((libro, index) => (

                            <li key={libro.id} className='containerBook'>
                                <strong>Name</strong><br /> {libro.namebook} <br /><br />
                                <strong>Author</strong><br /> {libro.authorbook} <br /><br />
                                <strong>Category</strong><br /> {libro.categbook} <br /><br />
                                <strong>Information</strong><br /> {libro.infobook} <br /><br />
                                <strong>Usuario</strong><br /> {libro.usuario} <br /><br />
                                <strong>Correo</strong><br /> {libro.correoUsuario} <br /><br />

                                <div>
                                  
                                <label htmlFor="">Favorites</label>
                                    <div className='btn'>
                                      <input className='btnCheckbox'
                                        type="checkbox"
                                        name=""
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
        </div>
    </div>
  )
}

export default UserSavedPag