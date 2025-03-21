import React from 'react'
import '../Styles/ContactUs.css'

function ContactMain() {
  return (
    <div>

<main>
    <div className='TitleContactUs'>
        <h1>Contact Us</h1>
    </div><br />
    <div className='DescriptionContacUs'>
        <p className='ContainerData'>Esta Pagina de Intercambio de Libros que fomenta la lectura y busca darle una segunda vida a los Libros </p>
    </div><br />

<div className='ContainerContactUs'>
    <div className='ContainerData'>
        <h4>Horario de Atención</h4>
        <p>De Lunes a Viernes de 8am a 4pm.</p>
         
    </div>

    <div  className='ContainerData'>
        <h4>Telefonos</h4>
        <p>506 8914-1798</p>
        <p>506 8817-2214</p>
    </div>

    <div  className='ContainerData'>
        <h4>Emails</h4>
        <p>SharedEx44@gmail.com</p>
    </div>

</div>
   
</main>

    </div>
  )
}

export default ContactMain