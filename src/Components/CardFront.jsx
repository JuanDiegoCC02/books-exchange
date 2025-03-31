import {useEffect, useState} from 'react'
import '../Styles/CardFront.css'
import llamadosBooks, { updateBooks }  from '../Services/llamadosBooks'


function CardFront() {
  const [books, setBooks]=useState([])    
  const [reload, setReload]=useState(false)
    
    useEffect (()=>{
        async function list() {
          const datos= await llamadosBooks.getBooks("books")
            setBooks(datos)
            }
              list()
                },[reload])

   
    
  return (
    <div><br />
       
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

            <img src={libro.img} alt="BookImg" srcset="" /><br />
                                
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