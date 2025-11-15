import { Route,Routes, BrowserRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import Lista from "../pages/Lista";
import Cadastro from "../pages/cadastro";
import styled from "styled-components";

import "./header.css"   
export default function Header() {  


    const StyledLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  &:hover {
    text-decoration: none;
 
    color: #000
  }
    `
 
  return (<>

    <header>
         <Link to='/'> <img src="https://artpoin.com/wp-content/uploads/2023/09/artpoin-motoqueiro-png9.png" alt="" /></Link>
        <nav>
            <ul>    
                <li>
                  <StyledLink to="/lista">Estoque </StyledLink>
                </li>
                <li>    

                    <StyledLink to="/cadastro">Cadastrar Produto</StyledLink>
                </li>
                <li>
                    Cadastrar Serviços
                </li>
                <li>Vendas</li>
            </ul>   
        </nav>
    </header>
    </>
  )
}