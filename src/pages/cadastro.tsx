import { useState, useEffect, use } from 'react'
import api from '../config/api'
import axios from 'axios'
import Header from '../components/header'
import styled from 'styled-components'


    const Container = styled.div `
     margin-top: 80px;
   width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  form span {
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
  }

  form input {
    padding: 5px;
    font-size: 16px;
  }

  button {
    padding: 10px 20px;
    font-size: 18px;
    cursor: pointer;
  }
     
 

  `

  const Title = styled.h2`    font-size:45px`

function Cadastro() {
  const [pecas, setPecas] = useState([])
  const [nome, setNome] = useState('')
  const [descricao, setDescricao] = useState('')
  const [preco, setPreco] = useState('')
  const [quantidade, setQuantidade] = useState('')
  const [novapeca, setNovaPeca] = useState({})

  useEffect(() => {
    async function fetchPecas() {
      const response = await api.get('/')
      console.log(response.data)
      setPecas(response.data)
    }
    fetchPecas()

  }, [])


  const cadastro = (e:any) => {
    e.preventDefault()
    const novaPeca = {
      nome: nome,
      descricao: descricao,
      preco: preco,
      quantidade: quantidade
    }
    setNovaPeca(novaPeca)
    axios.post('http://localhost:3000/cadastro', novaPeca)
    console.log(novaPeca)
  }
  return (
    <>
    <Header></Header>
    <Container>
    <Title>Cadastro de peças</Title>
  <form action="submit">
    <span>
      <p>nome</p> <input onChange={e => setNome(e.target.value)} type="text" /> 
    </span>
       <span>
      <p>descricao</p> <input onChange={e => setDescricao(e.target.value)} type="text" /> 
    </span>
    
       <span>
      <p>peco</p> <input onChange={e => setPreco(e.target.value)} type="number" /> 
    </span>
       <span>
      <p>Quantidade</p> <input onChange={e => setQuantidade(e.target.value)} type="number" /> 
    </span>
    <br />
    <button onClick={cadastro}>ADCIONAR PEÇA</button>
  </form>
  </Container>
    </>
  )
}

export default Cadastro
