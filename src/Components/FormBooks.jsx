import React, { useEffect, useState } from 'react'
import '../Styles/FormBooks.css'
import llamadosBooks from '../Services/llamadosBooks'
import CompleteInfoModal from './Modals/CompleteInfoModal';


function FormBooks() {

const [nameBook, setNameBook]=useState()
const [authorBook, setAuthorBook]=useState()
const [categBook, setCategBook]=useState()
const [infoBook, setInfoBook]=useState()
const [ErrorCampos, setErrorCampos] = useState(false);
const [editName, setEditName]=useState("")
const [editAuthor, setEditAuthor]=useState("")
const [editCateg, setEditCateg]=useState("")
const [editInfo, setEditInfo]=useState("")
const [img,setImg]=useState(null)
const [reload, setReload]=useState(false)
const imagencita=(e)=>{
    const archivo = e.target.files[0]
    if (archivo) {
        const lector = new FileReader () 
        lector.onloadend = ()=> {
            setImg(lector.result)
        }
        lector.readAsDataURL(archivo)
    }
}


function namebook(e) {
    setNameBook(e.target.value)
}
function authorbook(e) {
    setAuthorBook(e.target.value)
}
function categbook(e) {
    setCategBook(e.target.value)
}
function infobook(e) {
    setInfoBook(e.target.value)

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
    if (!nameBook || !authorBook || !categBook || !infoBook || !img) {
        setErrorCampos(true)
    }  else {
        llamadosBooks.postBooks(nameBook,authorBook,categBook,infoBook,false,img,localStorage.getItem("nombreUsuario"),localStorage.getItem("correoUsuario"), false)
        setReload(!reload) 
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
<br />

        <div className='TitleForm'>
            <h3>Books Form</h3>
        </div>
<div className='ContainerFormBooks'>
        <div className='inpFormB'>
            <label htmlFor="">Book Name</label><br />
            <input value={nameBook} onChange={namebook} type="text" />
        </div>
        <div className='inpFormB'>
            <label htmlFor="">Book Author</label><br />
            <input value={authorBook} onChange={authorbook}  type="text" />
        </div>
        <div className='inpFormB'>
            <label htmlFor="">Book Category</label><br />
            <input value={categBook} onChange={categbook}  type="text" />
        </div>
        <div className='inpFormB'>
            <label htmlFor="">Book Information</label><br />
            <input value={infoBook} onChange={infobook}  type="text" />
        </div>
        <div className='inpFormB'>
            <label htmlFor="">Book Image</label><br /> 
            <input onChange={imagencita}  type="file" />
        </div><br />
        <div>
                <input className='BTNPost' type="button" value="Post" onClick={post} />
        </div> <br />
      

</div>
            

<div>
        {ErrorCampos &&
            <CompleteInfoModal ErrorCV={"Complete Information"}/>
            }
        </div><br />
           

    </div>


  )
}

export default FormBooks