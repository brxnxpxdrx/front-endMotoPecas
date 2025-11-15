import { useState, useEffect, use } from 'react'
import { Route,Routes, BrowserRouter } from "react-router-dom";
import api from './config/api'
import './App.css'
import axios from 'axios'
import Cadastro from './pages/cadastro'
import Lista from './pages/Lista'
import Header from './components/header'
import Home from './pages/home';

function App() {
 
  return (
    <>
<Routes>
  <Route path='/' element =  {<Home/>} />
                <Route path="/lista" element={<Lista />} />
                <Route path="/cadastro" element={<Cadastro />} />
                </Routes>
    </>
  )
}

export default App
