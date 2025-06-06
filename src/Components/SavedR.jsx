import { useState, useEffect } from 'react'
import '../Styles/SavedStyle.css'
import llamadosBooks, {updateBooks } from '../Services/llamadosBooks'


function SavedR() {
    const [mostrar, setMostrar] = useState(false)
    const [books, setBooks] = useState([])
    const [editName, setEditName] = useState("")
    const [editAuthor, setEditAuthor] = useState("")
    const [editCateg, setEditCateg] = useState("")
    const [editInfo, setEditInfo] = useState("")

    const [reload, setReload] = useState(false)

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
        llamadosBooks.deleteBooks(id)
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
        llamadosBooks.updateBooks(bookEdit, id)
        setReload(!reload);
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

                <div className='AllContainer'><br />
                    <div className='TitleNewsBooks'><h2>News Books</h2> </div>
                    <div className='searchAllDiv'>
                        <input className='barraSearch' type="search" name="buscador" id="barraSearch" />  <input className='BTNEnviar' type="button" value="Search" />
                    </div><br />

                    <ul className='containerNewsBooks'>

                        {books.map((libro, index) => (

                            <li key={libro.id} className='containerBook'>
                                
                                <strong>Name</strong> {libro.namebook} <br /><br /><br />
                                <strong>Author</strong> {libro.authorbook} <br /><br /><br />
                                <strong>Category</strong> {libro.categbook} <br /><br /><br />
                                <strong>Information</strong> {libro.infobook} <br /><br /><br />
                                <strong>Usuario</strong> {libro.usuario} <br /><br /><br />
                                <strong>Correo</strong> {libro.correoUsuario} <br /><br /><br />

                                <div>
                                    <label htmlFor="">Home</label><br />
                                    <input className='inpChangeState'
                                        type="checkbox"
                                        name="StateChange"
                                        id="StateChange"
                                        checked={libro.statusFront}
                                        onChange={() => handleBookCheck(libro.id,index)}
                                    /> <br />
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


                                    <button className='btnDelete' onClick={e => delet(libro.id)}>Delete</button>
                                    <button className='btnEdit' onClick={() => setMostrar(!mostrar)}>Edit</button> <br />
                                    {mostrar &&
                                        <>
                                            <input onChange={newName} type="text" placeholder='Name' /> <br />
                                            <input onChange={newAuthor} type="text" placeholder='Author' /><br />
                                            <input onChange={newCateg} type="text" placeholder='Category' /><br />
                                            <input onChange={newInfo} type="text" placeholder='Information' /><br />    
                                            <button  onClick={() => edit(libro.id)} >Complete</button>
                                        </>
                                    }
                        
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>


            </div>
        </div>
    )
}

export default SavedR