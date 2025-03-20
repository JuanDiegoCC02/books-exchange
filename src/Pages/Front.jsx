import React from 'react'
import HeaderPages from '../Components/HeaderPages'
import CardFront from '../Components/CardFront'

function Front() {
  return (
    <div>
      <HeaderPages/>

      <CardFront nombreLibro={"La Sombra del Viento"}  estado={"Bad Status"}/>
    </div>
  )
}

export default Front