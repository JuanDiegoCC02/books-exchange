import React from 'react'
import '../Styles/FormBooks.css'


function FormBooks() {
  return (
    <div>
<br />

        <div className='TitleForm'>
            <h3>Books Form</h3>
        </div>
<div className='ContainerFormBooks'>
        <div>
            <label htmlFor="">Book Name:</label><br />
            <input type="text" />
        </div>
        <div>
            <label htmlFor="">Book Author:</label><br />
            <input type="text" />
        </div>
        <div>
            <label htmlFor="">Book Information:</label><br />
            <input type="text" />
        </div>
</div>
            <div>
                <input className='BTNPost' type="button" value="Post" />
            </div>
    </div>
  )
}

export default FormBooks