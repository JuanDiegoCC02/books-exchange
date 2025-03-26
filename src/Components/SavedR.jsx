import { useState, useEffect } from 'react'
import '../Styles/SavedStyle.css'
import llamadosBooks, { getBooks, updateBooks } from '../Services/llamadosBooks'


function SavedR() {

    const [mostrar, setMostrar] = useState(false)
    const [alertExchanges, setAlertExchanges] = useState(false)
    const [books, setBooks] = useState([])
    const [changeFavorite,setChangeFavorite] = useState(false)
    const [editName, setEditName] = useState("")
    const [editAuthor, setEditAuthor] = useState("")
    const [editCateg, setEditCateg] = useState("")
    const [editInfo, setEditInfo] = useState("")

    const [reload, setReload] = useState(false)

    const handleBookCheck = async (id, index) => {
        const updatedBooks = [...books]
        updatedBooks[index].statusFront = !updatedBooks[index].statusFront
        await updateBooks(
            { "statusFront": updatedBooks[index].statusFront }, id)
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

                <div className='AllContainer'><br /><br />
                    <div className='TitleNewsBooks'><h2>News Books</h2> </div>
                    <div className='searchAllDiv'>
                        <input className='barraSearch' type="search" name="buscador" id="barraSearch" />  <input className='BTNEnviar' type="button" value="Search" />
                    </div><br />

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
                                    <input className='inpChangeState'
                                        type="checkbox"
                                        name="StateChange"
                                        id="StateChange"
                                        checked={libro.statusFront}
                                        onChange={() => handleBookCheck(libro.id,index)}
                                    /> <br />
                                    <div className='btn'>
                                      <input className='btnCheckbox'
                                        type="checkbox"
                                        name=""
                                        id="btnCheckbox"
                                    
                                        onChange={() =>handleBookFavorite(libro.id,index)}
                                    /> 
                                     <label htmlFor="btnChecbox" className='lblCheckbox'></label>
                                    </div><br />


                                    <button className='btnDelete' onClick={e => delet(libro.id)}>Delete</button>
                                    <button className='btnEdit' onClick={() => setMostrar(!mostrar)}>Edit</button> <br />
                                    {mostrar &&
                                        <>
                                            <input onChange={newName} type="text" placeholder='Name' />
                                            <input onChange={newAuthor} type="text" placeholder='Author' />
                                            <input onChange={newCateg} type="text" placeholder='Category' />
                                            <input onChange={newInfo} type="text" placeholder='Information' />
                                            <button onClick={() => edit(libro.id)} >Complete</button>
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