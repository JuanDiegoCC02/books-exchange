import React from 'react'
import '../Styles/ContactUs.css'

function ContactMain() {
  return (
    <div>

    <div className='containerTitleContacUs'>
        <h1 className='titleContacUs'>Contact Us</h1>
    </div>

    <div className='fullDescripContainer'> 
    <div className='ContainerDataPag'>
        <div className='containerDIContacUs'>
          <p className='DescriptionContacUs'>Our Book Exchange platform was created to promote reading, learning, and the reuse of books, giving them a second
             life and connecting readers from different communities. Here you can discover new titles, share your own books, and create a collaborative space where reading is accessible to all.
          </p>
          <p className='InfoTYPag'>If you have questions, comments, or suggestions, please don't hesitate to contact us. Your participation is what keeps this reading community alive. 
             <br /> Thank you for visiting!
          </p>
         </div>
      
     <div className='ContainerContactUs'>
    <div className='ContainerData'>
        <h4 className='titleHrContacUs'>Days of attention</h4>
        <p className='HrContacUs'>Monday to Friday from 8 am to 4 pm.</p>
         
    </div>

    <div  className='ContainerData'>
        <h4 className='titleTelefContacUs'>Telephones</h4>
        <p className='telfContacUs'>(+506) 8914-1798</p>
        <p className='telfContacUs'>(+506) 8817-2214</p>
    </div>

    <div  className='ContainerData'>
        <h4 className='titleEmailContacUs'>Emails</h4>
        <p className='emailContacUs'>SharedEx44@gmail.com</p>
    </div>

</div><br />
   
    </div>
    </div>

    </div>
  )
}

export default ContactMain