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
                <title>PERFIL - FaunaAlerta</title>
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
            <main>
                <section>
                    {/* Foto do usuário */}
                    <div className="container my-5">
                        <div className="d-flex align-items-center gap-4">
                            <div className="box-nome">



                                {/* Alteração*/}
                                {/*<h1 className="fw-bold m-0">Chico Buarte</h1>*/}
                                <h1 id="nome-usuario" className="fw-bold m-0" >Nome do usuário</h1>



                            </div>
                        </div>
                    </div>
                </section>
                <section className="container-historico">
                    {/*Histórico de denúncias*/}
                    <div className="box-historico">
                        {/*Título do histórico de denúncia*/}
                        <div className="titulo-historico">
                            <h2>Histórico de denúncias</h2>
                        </div>
                        <div className="denuncia-status">
                            <div>
                                <h3>Maus-tratos</h3>
                                <p>Data: <span>01/01/2026</span></p>
                                <p>Status: <span>Em espera</span></p>
                                <p>Localização: <span>Rua Bonaparte, 101, Diadema, SP</span></p>
                            </div>
                            <div>
                                <button className="botao-verificar">Verificar denúncia</button>
                            </div>
                        </div>

                        <div className="denuncia-status">
                            <div>
                                <h3>Maus-tratos</h3>
                                <p>Data: <span>01/01/2026</span></p>
                                <p>Status: <span>Em espera</span></p>
                                <p>Localização: <span>Rua Bonaparte, 101, Diadema, SP</span></p>
                            </div>
                            <div>
                                <button className="botao-verificar">Verificar denúncia</button>
                            </div>
                        </div>

                        <div className="denuncia-status">
                            <div>
                                <h3>Maus-tratos</h3>
                                <p>Data: <span>01/01/2026</span></p>
                                <p>Status: <span>Em espera</span></p>
                                <p>Localização: <span>Rua Bonaparte, 101, Diadema, SP</span></p>
                            </div>
                            <div>
                                <button className="botao-verificar">Verificar denúncia</button>
                            </div>
                        </div>
                        <button className="botao-carregar">Carregar mais</button>
                    </div>
                </section>
                <div className="sair-container">
                    <button type="button" className="botaosair">Sair da conta</button>
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