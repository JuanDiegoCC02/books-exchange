import { useState, useEffect } from 'react'
import '../Styles/FormBooks.css'
import llamadosBooks from '../Services/llamadosBooks'


function SavedR() {



const [mostrar, setMostrar]=useState(false)
const [books, setBooks]=useState([])

const [editName, setEditName]=useState("")
const [editAuthor, setEditAuthor]=useState("")
const [editCateg, setEditCateg]=useState("")
const [editInfo, setEditInfo]=useState("")

const [reload, setReload]=useState(false)


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
        const bookEdit ={
            "namebook":editName,
            "authorbook":editAuthor,
            "categbook":editCateg,
            "infobook":editInfo
        }
        llamadosBooks.updateBooks(bookEdit,id)
        setReload(!reload);
    }
    
    function post() {
        llamadosBooks.postBooks(nameBook,authorBook,categBook,infoBook,false)
        setReload(!reload)
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
        

        <div>


        <div className='AllContainer'>
    <div className='TitleNewsBooks'> <h2>News Books</h2> </div>

     <ul className='containerNewsBooks'>
       
        
        {books.map ((libro,index)=>(
        
        <li className='containerBook'>
           <strong>Name</strong><br /> {libro.namebook} <br />
           <strong>Author</strong><br /> {libro.authorbook} <br />
           <strong>Category</strong><br /> {libro.categbook} <br />
           <strong>Information</strong><br /> {libro.infobook} <br />

                <div>
                    
                    <button className='btnDelete' onClick={e=>delet(libro.id)}>Delete</button>
                    <button className='btnEdit' onClick={()=>setMostrar(!mostrar)}>Edit</button> <br />
                    {mostrar &&
                    <>
                    <input onChange={newName} type="text" placeholder='Name' />
                    <input onChange={newAuthor} type="text" placeholder='Author' />
                    <input onChange={newCateg} type="text" placeholder='Category' />
                    <input onChange={newInfo} type="text" placeholder='Information' />
                    <button onClick={()=>edit(libro.id)} >Complete</button>
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