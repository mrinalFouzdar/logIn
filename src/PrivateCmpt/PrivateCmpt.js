import React from 'react'
import { useSelector } from 'react-redux'
import {Navigate,Outlet} from "react-router-dom"

const PrivateCmpt = () => {
    const {isLogin}= useSelector(state => state.token_data)
    
  return (
    isLogin ? <Outlet/> :<Navigate to="/logIn"/>
  )
}

export default PrivateCmpt