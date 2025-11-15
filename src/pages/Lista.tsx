import api from "../config/api"
import { useState, useEffect } from "react"
import Header from "../components/header"
import styled from "styled-components";
export default function Lista() {


  const [pecas, setPecas] = useState([])
  useEffect(() => {
    async function fetchPecas() {
      const response = await api.get('/')   
      console.log(response.data)
      setPecas(response.data)
    }
    fetchPecas()
  }, [])
  const Container = styled.div `
  width:100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  div{
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
  return (
 <div>
      <Header></Header>   <Container>
      {pecas.map((peca:any) => (
        <div key={peca._id}>
          <h3>{peca.nome}</h3>
          <p>{peca.descricao}</p>
          <p>R$ {peca.preco}</p>
          <p>Quantidade: {peca.quantidade}</p>
          <p>{peca._id}</p>
        </div>
      ))}
    </Container>
    </div>
  )
}
