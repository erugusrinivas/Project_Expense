import { useState } from "react";
import { useEffect } from "react";
const Lader=()=>{
const[timer,setTimer]=useState('')
useEffect(()=>{
    setInterval(()=>{
        const date = new Date();
        setTimer(
    `${date.getHours()}: ${date.getMinutes()}: ${date.getSeconds()}`
        );
    },1000)

}, [])
return(
    <div className="Timer">{timer}</div>
)
}
export default Lader;