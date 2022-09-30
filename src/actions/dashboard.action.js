
import axios from "axios";
import { SET_DASHBOARD } from "../action-types/action-types";

const setDeshboardState=(data)=>({
    type:SET_DASHBOARD,
    payload:data
});


export const deshboardUser =(data)=>(dispatch)=>{
    axios
    .get(`https://alkemapi.indusnettechnologies.com/api/cms/banner/E`,{headers: { 'Authorization': `bearer ${data}`}})
    .then((res)=>{
        // console.log(res.data.data)
        dispatch(setDeshboardState(res.data.data))
    })
    .catch(err=>{
        console.log(err)
    })
}