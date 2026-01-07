import { useState, useEffect } from 'react'
import '../Styles/NewBooks.css'
import llamadosBooks, {updateBooks, deleteBooks } from '../Services/llamadosBooks'
import BookProfileExtend from './BookProfileExtend'


function AdminNewBooks() {
    const presentUserEmail = localStorage.getItem("correoUsuario")
    const [mostrar, setMostrar] = useState(false)
    const [bookId, setBookId] = useState(null)
    const [books, setBooks] = useState([])
    const [editName, setEditName] = useState("")
    const [editAuthor, setEditAuthor] = useState("")
    const [editCateg, setEditCateg] = useState("")
    const [editInfo, setEditInfo] = useState("")
    const [search, setSearch]= useState("")
    const [reload, setReload] = useState(false)
    const [selectedUser, setSelectedUser] = useState(null);

    //Const handle for Home
    const handleBookCheck = async (id, index) => {
        const updatedBooks = [...books]
        updatedBooks[index].statusFront = !updatedBooks[index].statusFront
        await updateBooks(
            { "statusFront": updatedBooks[index].statusFront }, id)
        setBooks(updatedBooks)
    }

    //Const for Favortitos
    const handleBookFavorite = async (id,index)=> {
        const updatedBooks = [...books]
        updatedBooks[index].statusFavorites = !updatedBooks[index].statusFavorites
        await updateBooks(
            {"statusFavorites": updatedBooks[index].statusFavorites}, id)
            setBooks(updatedBooks)
    }
    
    // **Const for Intercambio 
    const handleBookChanged = async (id, index)=> {
      const updatedBooks = [...books]
      updatedBooks[index].statusChanged = !updatedBooks[index].statusChanged
      await updateBooks(
        {"statusChanged": updatedBooks[index].statusChanged}, id)
        setBooks(updatedBooks)
    } 

    function newName(e) {
        setEditName(e.target.value)
    }
    function newAuthor(e) {
        setEditAuthor(e.target.value)
    }
    function newCateg(e) {
        setEditCateg(e.target.value)
    }
    function newInfo(e) {
        setEditInfo(e.target.value)
    }

    //funtion Delete conrrect
    async function delet(id) {
        await deleteBooks(id)
        setReload(!reload)
    }

    //funtion Edit
    async function edit(id) {
       const bookEdit = {
            "namebook": editName,
            "authorbook": editAuthor,
            "categbook": editCateg,
            "infobook": editInfo
        } 
     await updateBooks(bookEdit, id)
        setReload(!reload);
    }

    const startEdit = (book)=>{
        if (bookId === book.id) {
            setBookId(null)
        } else {
            setBookId(book.id)
            setEditName(book.namebook)
            setEditAuthor(book.authorbook)
            setEditCateg(book.categbook)
            setEditInfo(book.infobook)
        }
    }

   
    useEffect(() => {
        async function list() {
            const datos = await llamadosBooks.getBooks("books")
            setBooks(datos)
        }
        list()
    }, [reload])

    const filteredBooks= books.filter((book) =>
    book.namebook.toLowerCase().includes(search.toLocaleLowerCase())||
    book.authorbook.toLocaleLowerCase().includes(search.toLowerCase()) ||
    book.categbook.toLowerCase().includes(search.toLowerCase())
    )

    return (
 <div>
      <div>

      <div className='TitleNewsBooks'><h2 className='titleNewBk'>New Books</h2> </div>
          <div className='AllContainer'><br />
                    
              <div className='searchAllDiv'>
                <input className='barraSearch' onChange={(e)=> setSearch(e.target.value)} type="search" name="buscador" id="barraSearch" /> 
                <input className='BTNEnviar' type="button" value="Search" />
              </div><br />

                 <ul className='UlBook'>
                  {filteredBooks.map((book, index) =>

                      <li key={book.id} className='LiBook'>
                         <div className='containerImg'>
                             <img className='BookImg'onClick={()=> setSelectedUser(book.usuario)} src={book.img} alt="BookImg" />
                         </div>

                         <div className='BookContent'>  
                             <strong  className='BookInfo'>Name</strong> {book.namebook} <br /><br /><br />
                             <strong className='BookInfo'>Author</strong> {book.authorbook} <br /><br /><br />
                             <strong className='BookInfo'>Category</strong> {book.categbook} <br /><br /><br />
                             <strong className='BookInfo'>Information</strong> {book.infobook} <br /><br /><br />
                              <strong className='BookInfo'>Username</strong> <a onClick={()=> setSelectedUser(book.usuario)}>{book.usuario}</a><br />
                              <strong className='BookInfo'>Email</strong> {book.correoUsuario} <br /><br /><br />
                         </div>
                                
                         <div className='containerOptUptdates'>
                               <label className='lbHome' htmlFor="">Home</label><br />
                              <input className='inpChangeState'
                                type="checkbox"
                                name="StateChange"
                                id="StateChange"
                                checked={book.statusFront}
                                onChange={() => handleBookCheck(book.id,index)}
                              /> <br />

                                <label className='lbFavorites' htmlFor="">Favorites</label>
                                 <div className='btn'>
                                  <input className='btnCheckbox'
                                     type="checkbox"
                                     name=""
                                     id="btnCheckbox"
                                     checked={book.statusFavorites}
                                     onChange={() =>handleBookFavorite(book.id,index)}
                                    /> 
                                     <label htmlFor="btnChecbox" className='lblCheckbox'></label>
                                 </div><br />


                                  <div>
                                {/* show text exchanged */}
                                    <label className='lbFavorites' htmlFor="btnCheckboxChanged" >
                                        {book.statusChanged ? 'Interchanged' : 'Aviable'}
                                    </label><br />
                                    {book.correoUsuario === presentUserEmail && (
                                    <>
                                    
                                    <div className='btnChanged'>
                                    <input 
                                    id='btnCheckboxChanged'
                                    className='btnCheckboxChanged' type="checkbox" 
                                    checked={book.statusChanged}
                                    onChange={()=> handleBookChanged(book.id, index)}
                                        />
                                        <label htmlFor="btnCheckboxChanged" className='lblCheckboxChanged'></label> {/* Asocia el label con el checkbox */}
                                    </div>
                                    </>
                                )}
                  </div>


                                 <div className='buttons-row'>
                                    <button className='btnDelete' onClick={e => delet(book.id)}>Delete</button>
                                    <button className='btnEdit' onClick={() => startEdit(book)}>
                                        {bookId === book.id? 'Cancel' : 'Edit'}
                                    </button> <br />
                                </div>
                                    {bookId === book.id &&
                                     <>
                                     <div>
                                       <input className='spaceEdit' onChange={newName} type="text" placeholder='Name' /> <br />
                                       <input className='spaceEdit' onChange={newAuthor} type="text" placeholder='Author' /><br />
                                       <input className='spaceEdit' onChange={newCateg} type="text" placeholder='Category' /><br />
                                       <input className='spaceEdit' onChange={newInfo} type="text" placeholder='Information' /><br />    
                                       <button className='confirmEdit' onClick={() => edit(book.id)} >Save</button>
                                     </div>
                                    </>
                                    }

               
                                
                                </div>
                            </li>
                        )}
                    </ul>
                    
                </div>
                
             {selectedUser && (
                <BookProfileExtend
                    usuario={selectedUser}
                    onClose={() => setSelectedUser(null)}
                />
            )}

            </div>
            
        </div>
    )
}

export default AdminNewBooks