import { useState } from "react"
import api from "../config/api"
import styled from "styled-components"
import axios from "axios"


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
export default function Login() {

    //SETANDO OS DADOS
    
    const [nomes, setNome] = useState('') 
    const [ senhas, setSenha] = useState('') 

    //FUNÇÃO DE LOGIN

    const clickLogin = async (e:any) => {
       e.preventDefault() 
       const dados = {
        nome : nomes,
        senha : senhas
       }
  if (nomes === '' || senhas === '') {
        alert('Confirme os dados') 
       }
       else{
try {
const response = await axios.post("http://localhost:3000/login", dados);

    // token vindo do backend
    const token = response.data.token;

    // salva no localStorage
    localStorage.setItem("token", token);

    // seta o token no header para as próximas requisições
axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;




    alert("Login realizado com sucesso!");

    // redirecionar
    window.location.href = "/home";

  } catch (error: any) {
    alert(error.response?.data?.message || "Erro ao fazer login");
  }
      
}
    }

   


  return (
    
    <Container>
    <Title>Login</Title>
    <form action="">
    <span>
        <p>Nome:</p>
        <input onChange={e => setNome(e.target.value)} type="text" />
    </span>
     <span>
        <p>Senha:</p>
        <input onChange={e => setSenha(e.target.value)} type="text" />
    </span>
    <button onClick={clickLogin}>Login</button>
    <button>Cadastrar</button>
    </form>
    </Container>
  )
}
