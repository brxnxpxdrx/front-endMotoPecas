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
   margin-top: 80px;
  width:100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  div{
    width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 200px;
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
        <div  key={peca._id}>
          <h3>NOME: {peca.nome}</h3>
          <p>MODELO: {peca.descricao}</p>
          <p>PREÇOR :${peca.preco}</p>
          <p>QUANTIDADE: {peca.quantidade}</p>
          <div>
          <button>Editar</button>
          <button>Excluir</button>
         </div>
        </div>
      ))}
    </Container>
    </div>
  )
}
