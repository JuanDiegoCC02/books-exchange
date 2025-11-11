import { useState, useEffect } from 'react'
import '../Styles/SavedStyle.css'
import llamadosBooks, {updateBooks, deleteBooks } from '../Services/llamadosBooks'
import BookProfileExtend from './BookProfileExtend'


function AdminNewBooks() {
    const [mostrar, setMostrar] = useState(false)
    const [books, setBooks] = useState([])
    const [editName, setEditName] = useState("")
    const [editAuthor, setEditAuthor] = useState("")
    const [editCateg, setEditCateg] = useState("")
    const [editInfo, setEditInfo] = useState("")
    const [search, setSearch]= useState("")
    const [reload, setReload] = useState(false)
    const [selectedUser, setSelectedUser] = useState(null);

    //Const para Home
    const handleBookCheck = async (id, index) => {
        const updatedBooks = [...books]
        updatedBooks[index].statusFront = !updatedBooks[index].statusFront
        await updateBooks(
            { "statusFront": updatedBooks[index].statusFront }, id)
        setBooks(updatedBooks)
    }

    //Const para Favortitos
    const handleBookFavorite = async (id,index)=> {
        const updatedBooks = [...books]
        updatedBooks[index].statusFavorites = !updatedBooks[index].statusFavorites
        await updateBooks(
            {"statusFavorites": updatedBooks[index].statusFavorites}, id)
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

    //Funcion Delete
    function delet(id) {
        deleteBooks(id)
        setReload(!reload)
    }
    //Funcion Edit
    function edit(id) {
        const bookEdit = {
            "namebook": editName,
            "authorbook": editAuthor,
            "categbook": editCateg,
            "infobook": editInfo
        }
        updateBooks(bookEdit, id)
        setReload(!reload);
    }

   




    useEffect(() => {
        async function list() {
            const datos = await llamadosBooks.getBooks("books")
            setBooks(datos)
        }
        list()
    }, [reload])

    const filteredBooks= books.filter((libro) =>
    libro.namebook.toLowerCase().includes(search.toLocaleLowerCase())||
    libro.authorbook.toLocaleLowerCase().includes(search.toLowerCase()) ||
    libro.categbook.toLowerCase().includes(search.toLowerCase())
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
                    {filteredBooks.map((libro, index) =>

                            <li key={libro.id} className='LiBook'>
                                <div className='containerImg'>
                                <img className='BookImg'onClick={()=> setSelectedUser(libro.usuario)} src={libro.img} alt="BookImg" />
                                </div>
                                <div className='BookContent'>  
                                <strong  className='BookInfo'>Name</strong> {libro.namebook} <br /><br /><br />
                                <strong className='BookInfo'>Author</strong> {libro.authorbook} <br /><br /><br />
                                <strong className='BookInfo'>Category</strong> {libro.categbook} <br /><br /><br />
                                <strong className='BookInfo'>Information</strong> {libro.infobook} <br /><br /><br />
                                <strong className='BookInfo'>Username</strong> <a onClick={()=> setSelectedUser(libro.usuario)}>{libro.usuario}</a><br />
                                <strong className='BookInfo'>Email</strong> {libro.correoUsuario} <br /><br /><br />
                                </div>
                                
                                <div className='containerOptUptdates'>
                                    <label className='lbHome' htmlFor="">Home</label><br />
                                    <input className='inpChangeState'
                                        type="checkbox"
                                        name="StateChange"
                                        id="StateChange"
                                        checked={libro.statusFront}
                                        onChange={() => handleBookCheck(libro.id,index)}
                                    /> <br />
                                    <label className='lbFavorites' htmlFor="">Favorites</label>
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

                                    <div className='buttons-row'>
                                    <button className='btnDelete' onClick={e => delet(libro.id)}>Delete</button>
                                    <button className='btnEdit' onClick={() => setMostrar(!mostrar)}>Edit</button> <br />
                                    </div>
                                    {mostrar &&
                                        <>
                                        <div className='edit-fields'>
                                            <input className='spaceEdit' onChange={newName} type="text" placeholder='Name' /> <br />
                                            <input className='spaceEdit' onChange={newAuthor} type="text" placeholder='Author' /><br />
                                            <input className='spaceEdit' onChange={newCateg} type="text" placeholder='Category' /><br />
                                            <input className='spaceEdit' onChange={newInfo} type="text" placeholder='Information' /><br />    
                                            <button className='confirmEdit' onClick={() => edit(libro.id)} >Complete</button>
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