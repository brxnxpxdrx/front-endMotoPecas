import axios from "axios"
import api from "../config/api"
import { useEffect, useState } from "react"
import styled from "styled-components"

const Container = styled.div `
   margin-top: 80px;
  width:100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  div{
    width: 300px;
     background-color: white;
      padding: 2vw 0;
      margin: 1vw 0; 
       border-radius: 10px;
       border: 1px solid black;

     };
   
  font-weight: bold;
     align-items : center;
     gap: 20px
     

  `
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
    <Container>
        {
            servicos.map((servico:any ) =>(
                <div key={servico.id}>
                <h2>Nome: {servico.nome}</h2>
                <p>Preço: R${servico.preco}</p>
                </div>
        ))
        }
    </Container>
  )
}
