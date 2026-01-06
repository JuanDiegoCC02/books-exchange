import React, { useEffect, useState } from 'react'
import '../Styles/FormBooks.css'
import llamadosBooks from '../Services/llamadosBooks'
import CompleteInfoModal from './Modals/CompleteInfoModal';


function FormBooks() {
const [books, setBooks]= useState([])
const [nameBook, setNameBook]=useState()
const [authorBook, setAuthorBook]=useState()
const [categBook, setCategBook]=useState()
const [infoBook, setInfoBook]=useState()
const [ErrorCampos, setErrorCampos] = useState(false);
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


async function post() {
    if (!nameBook || !authorBook || !categBook || !infoBook || !img) {
        setErrorCampos(true);
        return;
    }

    const bookCreateDate = new Date().toISOString();

      await llamadosBooks.postBooks(
        nameBook,
        authorBook,
        categBook,
        infoBook,
        false,
        img,
        localStorage.getItem("nombreUsuario"),
        localStorage.getItem("correoUsuario"),
        false,
        false,
        bookCreateDate,
      );
  
    setNameBook(""); setAuthorBook(""); setCategBook(""); setInfoBook(""); setImg(null);

    setReload(!reload);
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

        <div className='container-TitleForm'>
            <h3 className='TitleForm'>Books Form</h3>
        </div>

    <div className='ContainerFormBooks'>
        <div className='containerFB-LI'>
            <label className='lbForm-Book' htmlFor="">Book Name</label><br />
            <input className='inpForm-Book' value={nameBook} onChange={namebook} type="text" />
        </div>
        <div className='containerFB-LI'>
            <label className='lbForm-Book' htmlFor="">Book Author</label><br />
            <input className='inpForm-Book' value={authorBook} onChange={authorbook}  type="text" />
        </div>
        <div className='containerFB-LI'>
            <label className='lbForm-Book' htmlFor="">Book Category</label><br />
            <input className='inpForm-Book' value={categBook} onChange={categbook}  type="text" />
        </div>
        <div className='containerFB-LI'>
            <label className='lbForm-Book' htmlFor="">Book Information</label><br />
            <input className='inpForm-Book' value={infoBook} onChange={infobook}  type="text" />
        </div>
        <div className='containerFB-LI'>
            <label className='lbForm-Book' htmlFor="">Book Image</label><br /> 
            <input  onChange={imagencita}  type="file" />
        </div><br />

        <div>
                <input className='BTNPost' type="button" value="Post" onClick={post} />
        </div> 
      
<div>
        {ErrorCampos &&
            <CompleteInfoModal ErrorCV={"Almost done, please complete all fields in the form!"}/>
            }
        </div><br />

</div>
            

        
           

    </div>


  )
}

export default FormBooks