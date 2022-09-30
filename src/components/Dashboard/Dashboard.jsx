import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { deshboardUser } from '../../actions/dashboard.action';
import Product from '../Product/Product';

const Dashboard = () => {
  const {token} = useSelector(state=>state.token_data);
  
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(deshboardUser(token))
  },[token])
  return (
    <div>Dashboard
      <Product/>
    </div>
  )
}

export default Dashboard