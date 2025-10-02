import React from 'react'

function PostImg(e) {
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
  return (
    <div><input type="file" onChange={PostImg} /></div>
  )
}

export default PostImg