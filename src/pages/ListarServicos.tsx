import axios from "axios"
import api from "../config/api"
import { useEffect, useState } from "react"
export default function ListarServicos() {
    const[servicos, setServicos] = useState([])
        useEffect(() => {
        
    async function fetchServicos() {
      const response = await api.get('/lista-servicos')   
      console.log(response.data)
      setServicos(response.data)
    }
    fetchServicos()
  }, [])
console.log(servicos)
  return (
    <div>ListarServicos</div>
  )
}
