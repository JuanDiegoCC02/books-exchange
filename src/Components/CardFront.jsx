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
       
        <div className='TitleCardFront'><h3>Books Exchanges <br />  Your Welcome</h3></div>
        
        <div>


        <div className='AllContainer'>
        <ul className='containerNewsBooks'>
        {books
        .filter((libro)=> libro.statusFront===true)
        .map ((libro,index)=>(
        <li className='containerFront'>
            <img className='imgBookFront' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlrNEUasjK2NNpHXdedwhubaD1Ei-PgX9dgXVeD7enjugUbPIJGdVuA3owQml5GoPlOIc&usqp=CAU" width={190} height={160} alt="imgLibro"/> <br />
           <strong>Name</strong><br /> {libro.namebook} <br />
           <strong>Author</strong><br /> {libro.authorbook} <br />
           <strong>Category</strong><br /> {libro.categbook} <br />
                <div>
                    <div>
                    <input className='inpChangeState'
                     type="checkbox" 
                     name="StateChange"
                     id="StateChange" 
                     checked={libro.statusFront}
                     onChange={()=>handleBookCheck(libro.id,index)}
                     />                    </div>
                    
                    <button className='btnDelete' onClick={e=>delet(libro.id)}>Delete</button> <br />
                    <button className='btnEdit' onClick={()=>setMostrar(!mostrar)}>Edit</button> <br />
                    {mostrar &&
                    <>
                    <input onChange={newName} type="text" placeholder='Name' />
                    <input onChange={newAuthor} type="text" placeholder='Author' />
                    <input onChange={newCateg} type="text" placeholder='Category' />
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

export default CardFront