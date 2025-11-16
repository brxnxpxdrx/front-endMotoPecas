import { useState, useEffect, use } from 'react'
import { Route,Routes, BrowserRouter } from "react-router-dom";
import api from './config/api'
import './App.css'
import axios from 'axios'
import Cadastro from './pages/cadastro'
import Lista from './pages/Lista'
import Header from './components/header'
import Home from './pages/home';
import CadastroServicos from './pages/CadastroServicos';
import ListarServicos from './pages/ListarServicos';
import Vendas from './pages/Vendas';
import Login from './pages/Login';

function App() {
 
  return (
    <>
   <Header></Header>
<Routes>
              <Route path='/' element =  {<Login/>} />
              <Route path="/home" element={<Home/>} />
                <Route path="/lista" element={<Lista />} />
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path='/cadastro-servicos' element={<CadastroServicos />} />
                <Route path='/listar-servicos' element={<ListarServicos />} />
                <Route path='/venda' element={<Vendas />} />


                </Routes>
    </>
  )
}

export default App
