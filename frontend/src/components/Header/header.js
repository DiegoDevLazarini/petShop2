import React from 'react'
import * as C from "./styles";
import logo from '../../img/logo.png'

const header = () => {
  return (
    <C.header>
       <C.img src={logo}></C.img>
       <C.h1>PetShop</C.h1>
    </C.header>
  )
}

export default header
