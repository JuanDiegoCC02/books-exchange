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
    <div>
       
        <div className='containerTitleHome'>
             <h3 className='TitleHome'> Welcome to Books Exchange</h3>
          
        </div>
        
        <div className='containerDescPagWeb'>
          <p className='DescPagWeb'>A book-sharing website where we help you reuse that book you've already read, while also focusing on promoting reading and fostering social interaction.</p>          
        </div>

        <div>
        <div className='AllContainerHome'>
        <ul className='UlHome'>
        {books
        .filter((libro)=> libro.statusFront===true)
        .map ((libro,index)=>(
        <li className='LiHome'>

          <div className='containerImgHomeBook'>
            <img className='ImgofBookHome' src={libro.img} alt="BookImg" srcset="" />
          </div>
        <div className='containerBookInfoHome'>                    
           <strong className='BookInfoHome'>Name</strong> {libro.namebook} <br /> <br />
           <strong className='BookInfoHome'>Author</strong> {libro.authorbook} <br /><br />
           <strong className='BookInfoHome'>Category</strong> {libro.categbook} <br /><br />
        </div>    
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