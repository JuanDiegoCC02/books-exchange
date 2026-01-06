import React, { useEffect, useState } from 'react'
import { deleteBooks, getBooks, updateBooks,  } from '../Services/llamadosBooks'
import AdminBooksChart from './AdminBooksChart'
import AdminBooksChartComparative from './AdminBooksChartCompartive'
import "../Styles/AdminRequestBooks.css";
import BookProfileExtend from './BookProfileExtend';

function AdminRequestBooks() {
    const [books, setBooks] = useState([])
    const [reload, setReload] = useState(false)
    const [selectedUser, setSelectedUser] = useState(null);
    const [show, setShow] = useState(false)
    const [editName, setEditName] = useState("")
    const [editAuthor, setEditAuthor] = useState("")
    const [editCategory, setEditCategory] = useState("")
    const [editInfo, setEditInfo] = useState("")

    const handleBookHome = async (id, index) => {
        const updatedBooks = [...books]
        updatedBooks[index].statusFront = !updatedBooks[index].statusFront
        await updateBooks(
            {"statusFront": updatedBooks[index].statusFront}, id)
            setBooks(updatedBooks)
    }
    function newName(e) {
        setEditName(e.target.value)        
    }
    function newAuthor(e) {
        setEditAuthor(e.target.value)
    }
    function newCategory(e) {
        setEditCategory(e.target.value)
    }
    function newInfo(e) {
        setEditInfo(e.target.value)
    }
   
    /*funtion edit correct */
    async function edit(id) {
        const bookEdit ={
            "namebook" : editName,
            "authorbook" : editAuthor,
            "categbook" : editCategory,
            "infobook" : editInfo
        }
        await updateBooks(bookEdit, id)

        setReload(!reload)
    }

    /*Funtion delete correct */
    async function bookDelete(id) {
     await deleteBooks(id)   
     setReload(!reload)
    }


    useEffect (()=> {
        async function list() {
            const dataBooks = await getBooks()
            setBooks(dataBooks)
            console.log(dataBooks)
        }
        list()
    }, [reload])

 

  return (
    <div className='containerAllRequestBooks'>
        <div className='titleBooksRequest'>
            <h5 className='titleBooksRequest'>Books</h5>
        </div>

            <div className='containerAdminBooks'>
                <ul className='AdminUlBooks'>
                    {books.map((book, index) => (
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
                          
                            <div>
                                <label htmlFor="">Home</label>
                                <input type="checkbox"
                                className='ipnChangeHome'
                                name='StateChange'
                                id='StateChange'
                                checked={book.statusFront}
                                onChange={() => handleBookHome (book.id,index)} /> <br />
                            </div>

                            <div className='contBtnDeleteAdmin'><br />
                                <button className='btnDeleteAdminBook' 
                                onClick={()=> bookDelete(book.id)}>delete</button>
                                <button className='btnDeleteAdminBook' onClick={() =>setShow(!show)}>edit</button><br />
                            </div>
                            {show &&
                            <>
                             <div className=''>
                                <input className='spaceEdit' onChange={newName} type="text" placeholder='Name' />
                                <input className='spaceEdit' onChange={newAuthor} type="text" placeholder='Author' />
                                <input className='spaceEdit' onChange={newCategory} type="text" placeholder='Category' />
                                <input className='spaceEdit' onChange={newInfo} type="text" placeholder='Information' />
                                <button className='confirmEdit' onClick={() => edit(book.id)}>Save</button>
                            </div>
                            </>
                            }
                           

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