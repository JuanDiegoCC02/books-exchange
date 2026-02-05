import React from 'react'
import '../Styles/MyBooksCard.css'
import {useEffect, useState} from 'react'
import llamadosBooks, { updateBooks }  from '../Services/llamadosBooks'


function MyBooksCard() {

  const [books, setBooks]=useState([])  
  const [reload, setReload]=useState(false)
  
  
  const handleBookFavorite = async (id)=> {
    const updatedBooks = books.map(book => {
      if (book.id === id) {
        return {...book, statusFavorites: !book.statusFavorites}        
      }
      return book;
    })
  const  bookToUpdate = updatedBooks.find (book => book.id === id);
  console.log ("book update", bookToUpdate);
  try {
    await updateBooks({"statusFavorites" : bookToUpdate.statusFavorites}, id)
    setBooks(updatedBooks)
  } catch (error) {
    console.error("failed to update book")
  }
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
          <h3 className='titleFavBooks'>Favorite Books</h3>
        </div>
        <div className='containerAll-FavBooks'>
        <div className='containerFavBooks'>
          <ul className='UlFavBooks'>
            {books
            .filter((libro)=> libro.statusFavorites===true)
            .map((libro,index)=>(
              <li key={libro.id} className='LiFavBook'>
                <div className='containerImgFav'>
                  <img className='BookImgFav' src={libro.img} alt="" />
                </div>
                  <div className='containerBookInfoFav'>
                   <strong className='InfoFavBook'>Title</strong> {libro.namebook} <br /><br />
                   <strong className='InfoFavBook'>Author</strong> {libro.authorbook} <br /><br />
                   <strong className='InfoFavBook'>Category</strong>{libro.categbook} <br /><br />
                   <strong className='InfoFavBook'>Information</strong> {libro.infobook} <br /><br />
                   <strong className='InfoFavBook'>Username</strong> {libro.usuario} <br /><br />
                   <strong className='InfoFavBook'>Email</strong> {libro.correoUsuario} <br /><br />
                    </div>
                   <div>
                    <input className='btnCheckbox'
                     type="checkbox" 
                     name="StateFavorite"
                     id="btnCheckbox" 
                     checked={libro.statusFavorites}
                     onChange={()=>handleBookFavorite(libro.id)}
                     /> 
                      <label htmlFor="btnCheckbox" className='lblCheckbox'></label>

                     </div><br />
              </li>
            ))}
          </ul>
        </div>
        </div><br />
        
    </div>
  )
}

export default MyBooksCard