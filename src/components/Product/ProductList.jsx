import React, { useCallback } from 'react'
import { useEffect } from 'react';
import { DataContext } from '../../Contexts/DataContext'
import axios from 'axios';
import {  useSelector } from "react-redux";
import { useState } from 'react';
import { Form } from 'react-bootstrap';

const ProductList = () => {
    const {dataShow} =React.useContext(DataContext);
    const { token } = useSelector((state) => state.token_data);
    const {customercode,custdivisioncode,custDepot} = React.useContext(DataContext)
    const [list,setList]= useState("")
    const [searchtext,setSearchtext]=useState("")
    const [count,setCount]=useState("")
    const debounce = (fn, delay) => {
      // console.log(fn)
      let timerId;
      return (...args) => {
        // console.log(args);
       timerId && clearTimeout(timerId);
        timerId = setTimeout(() => fn(...args), delay);
      }
    };

 
    const fetchData =(value="")=>{
        axios
        .get(
          `https://alkemapi.indusnettechnologies.com/api/product/all_product_list/E/${Number(custDepot)}?dist_id=${Number(customercode)}&page=${1}&sv=&div_code=${Number(custdivisioncode)}&product_nm=${value}`,
          { headers: { Authorization: `bearer ${token}` } }
        )
        .then((res) => {
          console.log(res);
          console.log(res.data.data);
          setList(res.data.data)
          setCount(res.data.count.count)
        })
        .catch((error) => {
          console.log(error);
        });
    }
    const searchData =(value="",custDepot,customercode,custdivisioncode)=>{
        axios
        .get(
          `https://alkemapi.indusnettechnologies.com/api/product/all_product_list/E/${Number(custDepot)}?dist_id=${Number(customercode)}&page=${1}&sv=&div_code=${Number(custdivisioncode)}&product_nm=${value}`,
          { headers: { Authorization: `bearer ${token}` } }
        )
        .then((res) => {
          // console.log(res)
          console.log(res.data.data);
          setCount(res.data.count.count)

          setList(res.data.data)
        })
        .catch((error) => {
          console.log(error);
        });
    }

    
    // console.log('list',list)
    useEffect(()=>{
      if(dataShow){
        fetchData()

      }
    },[dataShow,custDepot])

    useEffect(()=>{
      if(!dataShow){
        setList("");
        setSearchtext("")
        setCount('')

      }
    },[dataShow])
    const debouncedHandler = useCallback(
      debounce(searchData, 1500),
      []
    );
    console.log(searchtext);
    const config = {
      headers: { Authorization: `Bearer ${token}` }
    };
    const handleAddtoCart=(data)=>{
      // console.log("first-data")
      // console.log(data);
      axios.post(`https://alkemapi.indusnettechnologies.com/api/cart/create_my_cart/E`,data,config)
      .then(res=>{
        console.log(res);
      })
      .catch((err)=>{
        console.log(err)
      })
    }
  return (
    <div>
      <Form.Control
        type="text"
        placeholder="Search by Product/Code/Compositioin"
        onChange={(e)=>{setSearchtext(e.target.value);
          debouncedHandler(e.target.value,custDepot,customercode,custdivisioncode)
        }}
        disabled={list? false : true}
        value={searchtext ? searchtext : ""}
        className="mt-3"

      />
      {
        count && <div>{`COUNT:- ${count}`}</div>
      }

        {
           dataShow && list && list.map(item=><div className="card m-2 w-100" key={Date.now()+Math.random()}>
            <div className="card-body">
              <div className='d-flex flex-row justify-content-around'>
                <h5 className='card-title'>{`Brand Name:- ${item.brand_name}`}</h5>
                <div>

                {`Product:- ${item.product_name}`}
                </div>
                <div>
                  {`Pro_Code:- ${item.pro_code}`}
                </div>
                <button onClick={()=>handleAddtoCart({account_no:"",cart_category:"nd",cart_type:"e",cfa_code:custDepot,customer_id:"6241",product:{box_quantity:0,product_code:item.pro_code,quantity:0,total_quantity:0}})}>Add</button>

              </div>
            </div>
          </div>)
        }
    </div>
  )
}

export default ProductList