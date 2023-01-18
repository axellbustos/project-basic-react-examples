import { useState } from "react"

export const useShow=(initialState=false)=>{
    //en este caso "show" es "state" y "setShow" es "setState" ya que el nombre al parecer es opcional
    const[show, setShow]=useState(false)//aca va normalito quien sabe porque.Investigar
    const handleShowMessage = ()=>{
        setShow(!show)
    }
    return{show, handleShowMessage}
}