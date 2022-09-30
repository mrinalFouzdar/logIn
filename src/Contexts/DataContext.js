import React, { createContext, useEffect, useState } from "react";

export const DataContext =createContext();

export function DataContextProvider({children}){
    const [customercode,setcustomercode]=useState("");
    const [custdivisioncode,setcustdivisioncode]=useState("");
    const [custDepot,setcustDepot]=useState("");
    const [dataShow,setDatashow]= useState(false);
    const [depotDataRemove,selectdepotDataRemove]=useState(false)
    const [divisionDataRemove,selectdivsionDataRemove]=useState(false)

    const handleCustomercod=(data)=>{
        setcustomercode(data)
    }

    const handledivisionCode =(data)=>{
        setcustdivisioncode(data)
    }

    const handledepot=(data)=>{
        setcustDepot(data)
        setDatashow(true)
    }
    console.log("custDepot",custDepot)

    // data remove form last modal
    const thirdDataRemove=()=>{
        selectdepotDataRemove(!depotDataRemove)
    }

    // data remove form 2nd modal;
    const secondDataremove=()=>{
        selectdivsionDataRemove(!divisionDataRemove)
    }

    const productListUnmuont=()=>{
        setDatashow(false)
    }

    return(
        <DataContext.Provider value={{customercode,handleCustomercod,handledivisionCode,custdivisioncode,handledepot,custDepot,dataShow,thirdDataRemove,depotDataRemove,secondDataremove,divisionDataRemove,productListUnmuont}}>
            {children}
        </DataContext.Provider>
    )

}
