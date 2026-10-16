import { useState } from 'react'
import './Login.css'
import { Helmet } from 'react-helmet-async'
import '../../global/global.css'
import Logo1 from '../../assets/Logo1.png'
import twitterxicone from '../../assets/twitterxicone.png'
import instragram from '../../assets/instagram.png'
import facebook from '../../assets/facebook.png'

function Login() {


    return (
        <>
            <Helmet>
                <title>Cadastro - FaunaAlerta</title>
            </Helmet>
            <header className="Topo">
                <nav className="navbar navbar-expand-md">
                    <div className="container">

                        {/*Logo*/}

                        <a className="navbar-brand d-flex align-items-center" href="../index.html">
                            <img src={Logo1} width="60" alt="Logo" />
                            <span className="texto-logo ms-2">FaunaAlerta</span>
                        </a>

                        {/*botão hamburguer*/}

                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menu">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        {/* Menu */}
                        <div className="menuu collapse navbar-collapse" id="menu">

                            {/*CRIA LISTA NÃO-ORDENADA*/}
                            <ul className="navbar-nav mx-auto gap-3">

                                {/* BOTÃO Home */}
                                <li className="nav-item">

                                    <a className="nav-link menu-btn" href="../index.html">
                                        <i className="bi bi-house-door fs-4"></i>
                                        <strong>Home</strong>
                                    </a>
                                </li>

                                {/*BOTÃO ONGS*/}
                                <li className="nav-item">

                                    <a className="nav-link menu-btn " href="../pages/ONGs.html">
                                        <i className="bi bi-heart fs-4"></i>
                                        <strong>ONGs</strong>
                                    </a>
                                </li>

                                {/* BOTÃO Denúncia */}
                                <li className="nav-item">

                                    <a className="nav-link menu-btn" href="../pages/denuncia.html">
                                        <i className="bi bi-megaphone fs-4"></i>
                                        <strong>Denúncia</strong>
                                    </a>
                                </li>

                                {/* BOTÃO Sobre */}
                                <li className="nav-item">

                                    <a className="nav-link menu-btn" href="../pages/sobre.html">
                                        <i className="bi bi-info-circle fs-4"></i>
                                        <strong>Sobre</strong>
                                    </a>
                                </li>

                            </ul>

                            {/* BOTÃO Usuário */}
                            <a href="../pages/login.html" className="user-btn">
                                <i className="bi bi-person fs-3"></i>
                            </a>

                        </div>
                    </div>

                </nav>
            </header>
            <main className="d-flex align-items-center justify-content-center py-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-8 col-lg-6">

                            <h1 className="text-center mb-4 titulo-cadastro">EFETUE O CADASTRO</h1>

                            <div className="card-cadastro p-4 p-sm-5">
                                <form>
                                    <div className="mb-4">
                                        <label className="form-label label-cadastro">Nome</label>
                                        <input type="text" className="form-control input-cadastro" placeholder="Seu Nome" required id="nomeCadastro"/>
                                    </div>

                                    <div className="mb-4">
                                        <label className="form-label label-cadastro">E-mail</label>
                                        <input type="email" className="form-control input-cadastro" placeholder="E-mail" required id="emailCadastro"/>
                                    </div>

                                    <div className="mb-4">
                                        <label className="form-label label-cadastro">Telefone</label>
                                        <input type="tel" className="form-control input-cadastro" placeholder="Seu Telefone" required id="telCadastro"/>
                                    </div>

                                    <div className="mb-5">
                                        <label className="form-label label-cadastro">Criar senha</label>
                                        <input type="password" className="form-control input-cadastro" placeholder="Senha" required id="senhaCadastro"/>
                                    </div>

                                    <div className="text-center">
                                        <button className="btn btn-cadastro-laranja" >CADASTRAR</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </main> 
            <footer className="footer">
                <div className="container">

                    <div className="row align-items-center">

                        {/* Logo */}
                        <div className="col-12 col-md-4 text-center text-md-start mb-4 mb-md-0">

                            <div className="d-flex align-items-center justify-content-center justify-content-md-start">
                                <img src={Logo1} className="footer-logo" />

                                <h2 className="logo-nome ms-3">
                                    Fauna<br />Alerta
                                </h2>
                            </div>

                        </div>

                        {/* Contato */}
                        <div className="col-12 col-md-4 text-center mb-4 mb-md-0">

                            <p className="telefone mb-1 ">
                                <strong>Telefone</strong>
                                <span>(11) 99999-9999</span>
                            </p>

                            <p className="email">
                                <strong>Email</strong>
                                <a href="mailto:faunalerta@gmail.com"><span>faunalerta@gmail.com</span></a>
                            </p>

                            <div className="d-flex justify-content-center gap-5 mt-3">
                                <a href="https://x.com/"> <img src={twitterxicone} className="icone-social" /></a>
                                <a href="https://www.facebook.com/?locale=pt_BR"> <img src={facebook} className="icone-social" /></a>
                                <a href="https://www.instagram.com/"> <img src={instragram} className="icone-social" /></a>
                            </div>

                        </div>

                        {/* Navegação */}
                        <div className="links-footer col-12 col-md-4 text-center text-md-end">

                            <nav className="footer-nav">
                                <strong><a href="../index.html">Principal</a></strong>
                                <strong><a href="../pages/ONGs.html">ONGs</a></strong>
                                <strong><a href="../pages/denuncia.html">Denúncias</a></strong>
                                <strong><a href="../pages/sobre.html">Sobre Nós</a></strong>
                                <strong><a href="../pages/login.html">Login</a></strong>
                            </nav>

                        </div>

                    </div>

                </div>
            </footer>
        </>
    )
}

export default Login