import Header from "../components/header"
import styled from "styled-components"
import { Link } from "react-router-dom"
 const Container = styled.div`
 margin-top: 80px;
justify-items: center;
align-items: center;
padding: 2vw 0;
 display: grid;
grid-template-columns: repeat(3, 1fr);
grid-template-rows: repeat(2, 1fr);
grid-column-gap: 14px;
grid-row-gap: 14px;
div{
  .title{
    font-size: 30px;
    text-decoration: none;
    align-items: center;
    justify-content: center;
   border: 1px solid black;
   background-color: red;
 

  }
  width: 300px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border: 2px solid black;
  border-radius: 5px;
  img{
    padding: 2vw 0;
    width: 150px;
  }
  text-align: center;
}
.div1 { grid-area: 1 / 1 / 2 / 2;  background-color: #fff;box-shadow: 10px 10px 5px grey;}
.div2 { grid-area: 1 / 2 / 2 / 3;  background-color: #fff ; box-shadow: 10px 10px 5px grey}
.div3 { grid-area: 1 / 3 / 2 / 4;   background-color: #fff ; box-shadow: 10px 10px 5px grey}
.div4 { grid-area: 2 / 1 / 3 / 2;   background-color: #fff;box-shadow: 10px 10px 5px grey}
.div5 { grid-area: 2 / 2 / 3 / 3;    background-color: #fff;box-shadow: 10px 10px 5px grey}
.div6 { grid-area: 2 / 3 / 3 / 4;   background-color: #fff ; box-shadow: 10px 10px 5px grey}
  
  `

  
    const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  &:hover {
    text-decoration: none;
 
    color: white
  }
    `
  export default function Home() {
 
  return (
    <div >
        <Header></Header>
    <Container>
    <div className="div1">
      <img src="/vendas.png" alt="" />  
 <div className="title"> <StyledLink to='/venda'> Vendas</StyledLink> </div>
    </div>
      <div className="div2">
        <img src="/estoque-pronto.png" alt="" />
<div className="title"> <StyledLink to='/lista'> Estoque</StyledLink></div>  
    </div>
      <div className="div3">
        <img src="/servico-tecnico.png" alt="" />
     <div className="title"> <StyledLink to='/listar-servicos'> Serviços</StyledLink></div>  
    </div>
      <div className="div4">
        <img src="/cadastro.png" alt="" />
 <div className="title"> <StyledLink to='/cadastro-servicos'> Cadastrar Serviços</StyledLink></div>  
    </div>
      <div className="div5">
        <img src="/cadastro.png" alt="" />
 <div className="title"><StyledLink to='/cadastro'> Cadastrar Produtos</StyledLink></div>   
    </div>
    </Container>
  
    
    </div>
  )
}
