import { Route,Routes, BrowserRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import Lista from "../pages/Lista";
import Cadastro from "../pages/cadastro";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import "./header.css"   
export default function Header() {  

   const navigate = useNavigate();

  const handleLogout = () => {
    // 1️⃣ Remove o token
    localStorage.removeItem("token");

    // 2️⃣ Redireciona para a tela de login
    navigate("/");
  };

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
          
         
        </nav>    <StyledLink to='/' onClick={handleLogout}>
      Sair
    </StyledLink>
    </header>
    </>
  )
}