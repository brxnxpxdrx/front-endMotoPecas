import {useState, useEffect} from 'react'
import styled from 'styled-components'
import api from '../config/api'
import axios from 'axios'

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
export default function Vendas() {

const [venda, setVenda] = useState([])
const [formaDePagamento, setFormaDePagamento] = useState({
    pix: false,
    avista: false,
    cartao: false,
    fiado: false
})
const [pecas, setPecas] = useState([])
const [nome, setNome] = useState('')



 useEffect(() => {
    async function fetchPecas() {
      const response = await api.get('/')   
      console.log(response.data)
      setPecas(response.data)
    }
    fetchPecas()
  }, [])

  const click = (e:any) => {
    e.preventDefault()
    
    const achaPeca:any =  pecas.find((peca:any) => peca.nome === nome)
    
    if (achaPeca) {
      alert(achaPeca._id)
      axios.put<any>(`http://localhost:3000/atualizar/${achaPeca._id}`,{
      quantidade : achaPeca.quantidade - 1
      })
    } else{
      alert('error')
    }
    
  }

  console.log(pecas)
  return (
    <Container>
      <Title>Nova Venda</Title>
      <form  >
        <li>
          
            <p>produto</p>
       <input onChange={e => setNome(e.target.value)} type="text" />
            
          
        </li>
        <li>
          <p>Serviço</p>
          <input type="text" />
        </li>
        <li>
          <p>forma de pagamento</p>
           <div>
        <input
          type="checkbox"
          id="pix"
          name="pix"
         
        />
        <label htmlFor="pix">Pix</label>
      </div>

      <div>
        <input
          type="checkbox"
          id="avista"
          name="avista"
        
        />
        <label htmlFor="avista">À vista</label>
      </div>

      <div>
        <input
          type="checkbox"
          id="cartao"
          name="cartao"
         
        />
        <label htmlFor="cartao">Cartão</label>
      </div>

      <div>
        <input
          type="checkbox"
          id="fiado"
          name="fiado"
        
        />
        <label htmlFor="fiado">Fiado</label>
      </div>

      <button onClick={click}>Enviar</button>
        </li>
      </form>

    </Container>
  )
}
