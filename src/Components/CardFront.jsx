import {useEffect, useState} from 'react'
import '../Styles/CardFront.css'
import llamadosBooks, { updateBooks }  from '../Services/llamadosBooks'


function CardFront() {
    const [mostrar, setMostrar]=useState(false)
const [books, setBooks]=useState([])    

const [editName, setEditName]=useState("")
const [editAuthor, setEditAuthor]=useState("")
const [editCateg, setEditCateg]=useState("")

const [reload, setReload]=useState(false)

const handleBookCheck = async (id,index)=> {
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
    function newCateg(e) {
        setEditCateg(e.target.value)
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
        llamadosBooks.postBooks(nameBook,authorBook,categBook,infoBook,false,img)
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
       
        <div className='TitleCardFront'>
             <h3 className='SubtitleCardFront'> Welcome</h3>
              <h3>Books Exchanges </h3>
        </div>
        
        <div>


        <div className='AllContainer'>
        <ul className='containerNewsBooks'>
        {books
        .filter((libro)=> libro.statusFront===true)
        .map ((libro,index)=>(
        <li className='containerFront'>

            <img src={libro.img} alt="BookImg" srcset="" />
                                
           <strong>Name</strong> {libro.namebook} <br /> <br />
           <strong>Author</strong> {libro.authorbook} <br /><br />
           <strong>Category</strong> {libro.categbook} <br /><br />
                
                    <div>
                    
                </div>
        </li>
        ))}
     </ul>
     </div>


        </div>


    </div>
  )
}

export default CardFront