import Header from "../components/header"
import styled from "styled-components"
import { Link } from "react-router-dom"
 const Container = styled.div`
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
  export default function Home() {
 
  return (
    <div >
        <Header></Header>
    <Container>
    <div className="div1">
      <img src="/vendas.png" alt="" />  
 <div className="title">   Vendas</div>
    </div>
      <div className="div2">
        <img src="/estoque-pronto.png" alt="" />
<div className="title"> <Link to='/lista'> Estoque</Link></div>  
    </div>
      <div className="div3">
        <img src="/servico-tecnico.png" alt="" />
     <div className="title"> Serviços</div>  
    </div>
      <div className="div4">
        <img src="/cadastro.png" alt="" />
 <div className="title">Cadastrar Serviços</div>  
    </div>
      <div className="div5">
        <img src="/cadastro.png" alt="" />
 <div className="title">Cadastrar Produtos</div>   
    </div>
    </Container>
  
    
    </div>
  )
}
