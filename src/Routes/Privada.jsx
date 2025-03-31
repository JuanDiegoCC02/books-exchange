import React from 'react'
import { Link } from 'react-router-dom'

function Privada({ValidacionNavg}) {
    function UsrValido() {
        const usuario = localStorage.getItem("typeUsuario")
        if (usuario) {
            return true
        } else {
         return false   
        }
    }
  return (
    UsrValido() ? ValidacionNavg: <div>usted no esta registrado <Link to ={"/registro"}>registro</Link></div> 
)
}

export default Privada