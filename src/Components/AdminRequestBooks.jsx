import React, { useEffect, useState } from 'react'
import { deleteBooks, getBooks } from '../Services/llamadosBooks'

function AdminRequestBooks() {
    const [books, setBooks] = useState([])
    const [reload, setReload] = useState(false)

    useEffect (()=> {
        async function list() {
            const dataBooks = await getBooks()
            setBooks(dataBooks)
            console.log(dataBooks)
        }
        list()
    }, [reload])

    async function bookDelete(id) {
     await deleteBooks(id)   
    }

  return (
    <div>
        <div><h5>Books</h5></div>

            <div className='containerBookInfoAdmin'>
                <ul className='AdminUlBooks'>
                    {books.map(book => (
                        <li className='AdminLiBooks' key={book.id}>
                            <h5 className='titleBookAdmin'> {book.namebook} </h5>
                            <span className='infoAdminBook'> {book.usuario} </span>
                            <span className='infoAdminBook'> {book.correoUsuario} </span>
                            <span className='infoAdminBook'> {book.namebook} </span>
                            <span className='infoAdminBook'> {book.authorbook} </span>
                            <span className='infoAdminBook'> {book.categbook} </span>
                            <span className='infoAdminBook'> {book.infobook} </span>
                            <span className='infoAdminBook'> {book.statusFront ? "True" : "False"} </span>
                            <span className='infoAdminBook'> {book.statusChanged ? "True" : "False"} </span>

                            <div>
                                <button className='btnDeleteAdminBook' 
                                onClick={()=> bookDelete(book.id)}>delete</button>
                            </div>

                        </li>
                    ))}
                </ul>
            </div>

    </div>
  )
}

export default AdminRequestBooks