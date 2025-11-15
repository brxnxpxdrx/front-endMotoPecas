import { useEffect,useState } from "react"
import api from "../config/api"
import axios from "axios"
import Header from "../components/header"
export default function CadastroServicos() {
    const[servicos, setServicos]= useState( [] ) 
   const[nome, setNome] = useState('') 
   const[preco, setPreco] = useState(0)
      useEffect(() => {
        
    async function fetchServicos() {
      const response = await api.get('/lista-servicos')   
      console.log(response.data)
      setServicos(response.data)
    }
    fetchServicos()
  }, [])

  const click = (e:any) => {
  e.preventDefault()
    if(nome  === '' || preco === 0){
       
        alert('Revise os dados')
    }else{
  
    const novoServico = {
        nome: nome,
        preco: preco
    }
        axios.post('http://localhost:3000/cadastro-servicos', novoServico)
        console.log(novoServico)
        setNome('')
        setPreco(0)
}
  }

  console.log(servicos)
  return (
    <div>
        <Header></Header>
       hello
       <form action="submit">
        <span>
            <p>Nome</p>
            <input onChange={e => setNome(e.target.value)} type="text" />
        </span>
        <span>
            <p>Preço</p>
            <input type='number' onChange={e => setPreco(parseFloat(e.target.value))
}  />
        </span>
        <button onClick={click}>
            Cadastrar Serviço
        </button>

       </form>

    </div>
  )
}
