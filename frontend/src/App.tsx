import Home from './pages/Home/Home.tsx'
import Sobre from './pages/Sobre/Sobre.tsx'
import Perfil from './pages/Perfil/Perfil.tsx'
import Login from './pages/Login/Login.tsx'
import Denuncia from './pages/Denuncia/Denuncia.tsx'
import Cadastro from './pages/Cadastro/Cadastro.tsx'
import Admin from './pages/Admin/Admin.tsx'
import Orgao from './pages/Orgao/Orgao.tsx'
import Pesquisador from './pages/Pesquisador/Pesquisador.tsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { NavBar } from './components/NavBar.tsx'
import { Footer } from './components/Footer.tsx'


export function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/login" element={<Login />} />
        <Route path="/denuncia" element={<Denuncia />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/Orgao" element={<Orgao />} />
        <Route path="/Pesquisadpr" element={<Pesquisador />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}