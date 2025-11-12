import React, { useEffect, useState } from 'react'
import { deleteBooks, getBooks } from '../Services/llamadosBooks'
import AdminBooksChart from './AdminBooksChart'
import AdminBooksChartComparative from './AdminBooksChartCompartive'

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
     setReload(!reload)
    }

  return (
    <div>
        <div><h5>Books</h5></div>

            <div className='containerBookInfoAdmin'>
                <ul className='AdminUlBooks'>
                    {books.map(book => (
                        <li className='AdminLiBooks' key={book.id}>
                            <h5 className='titleBookAdmin'> {book.namebook} </h5>
                            <span className='infoAdminBook'> {book.usuario} </span><br />
                            <span className='infoAdminBook'> {book.correoUsuario} </span><br />
                            <span className='infoAdminBook'> {book.namebook} </span><br />
                            <span className='infoAdminBook'> {book.authorbook} </span><br />
                            <span className='infoAdminBook'> {book.categbook} </span><br />
                            <span className='infoAdminBook'> {book.infobook} </span><br />
                            <span className='infoAdminBook'> {book.statusFront ? "True" : "False"} </span><br />
                            <span className='infoAdminBook'> {book.statusChanged ? "True" : "False"} </span><br />
                            <span className='infoAdminBook'> {book.bookCreateDate}</span><br />
                          
                            <div><br />
                                <button className='btnDeleteAdminBook' 
                                onClick={()=> bookDelete(book.id)}>delete</button>
                            </div>

                        </li>
                    ))}
                </ul>
            </div>

        <div>
            <AdminBooksChart/>
        </div><br /><br />

        <div>
            <AdminBooksChartComparative/>
        </div>

    </div>
  )
}

export default AdminRequestBooks