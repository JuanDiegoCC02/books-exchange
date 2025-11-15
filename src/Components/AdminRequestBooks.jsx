import React, { useEffect, useState } from 'react'
import { deleteBooks, getBooks } from '../Services/llamadosBooks'
import AdminBooksChart from './AdminBooksChart'
import AdminBooksChartComparative from './AdminBooksChartCompartive'
import "../Styles/AdminRequestBooks.css";
import BookProfileExtend from './BookProfileExtend';

function AdminRequestBooks() {
    const [books, setBooks] = useState([])
    const [reload, setReload] = useState(false)
    const [selectedUser, setSelectedUser] = useState(null);


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
    <div className='containerAllRequestBooks'>
        <div className='titleBooksRequest'>
            <h5 className='titleBooksRequest'>Books</h5>
        </div>

            <div className='containerAdminBooks'>
                <ul className='AdminUlBooks'>
                    {books.map(book => (
                        <li className='AdminLiBooks' key={book.id}>
                            <h5 className='titleBookAdmin'><a onClick={()=> setSelectedUser(book.usuario)}> {book.namebook} </a></h5>
                            <span className='infoAdminBook'>Username: {book.usuario} </span><br />
                            <span className='infoAdminBook'>Email: {book.correoUsuario} </span><br />
                            <span className='infoAdminBook'>Book Name: {book.namebook} </span><br />
                            <span className='infoAdminBook'>Author: {book.authorbook} </span><br />
                            <span className='infoAdminBook'>Category: {book.categbook} </span><br />
                            <span className='infoAdminBook'>Information: {book.infobook} </span><br />
                            <span className='infoAdminBook'>State Home: {book.statusFront ? "True" : "False"} </span><br />
                            <span className='infoAdminBook'>State Changed: {book.statusChanged ? "True" : "False"} </span><br />
                            <span className='infoAdminBook'>Creation Date: {book.bookCreateDate}</span><br />
                          
                            <div className='contBtnDeleteAdmin'><br />
                                <button className='btnDeleteAdminBook' 
                                onClick={()=> bookDelete(book.id)}>delete</button>
                            </div>

                        </li>
                    ))}
                </ul>
            </div>  

            <div>
                {selectedUser && (
                <BookProfileExtend
                 usuario={selectedUser}
                 onClose={() => setSelectedUser(null)}
                  />)}
            </div>

        <div className='containerBooksChart'>
            <AdminBooksChart/>
        </div><br /><br />

        <div className='containerComparativeBooksChart'>
            <AdminBooksChartComparative/>
        </div>

    </div>
  )
}

export default AdminRequestBooks