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
                <title>DENÚNCIA - FaunaAlerta</title>
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
                <h1 className="Titulo">REGISTRE SUA DENÚNCIA</h1>

                {/*formulario de denuncia*/}
                <div className="conteiner">
                    <form>
                        <div className="campo">
                            <label htmlFor="opcao-denuncia">Tipo de denúncia</label>
                            {/*campos de seleçao do tipo de denuncia*/}
                            <select className="input-efeito">
                                <option value="Caça ilegal">Caça ilegal</option>
                                <option value="Pesca ilegal">Pesca ilegal</option>
                                <option value="Maus-tratos">Maus-tratos</option>                          
                                <option value="Tráfico ilegal de aniamis">Tráfico ilegal de animal</option>
                                <option value="Abandono">Abandono</option>
                                <option value="Espetáculo cruel(Rinha)">Espetáculo cruel (Rinha ou exibição de sofrimento animal alheio)</option>
                                <option value="Zoofilia">Zoofilia</option>
                                <option value="Destruição de áreas preservadas">Destruição de area preservada</option>
                                <option value="Queimadas ilegais">Queimada ilegal</option>
                                <option value="Dificultar fiscalização ambiental">Dificultar fiscalização ambiental</option>
                                <option value="Descarte de lixo em área de preservação">Descarte de lixo em area de preservação</option>
                            </select>
                        </div>

                        {/* autor do crime*/}
                        <div className="campo">
                            <label htmlFor="text">Possível autor</label>
                            <input className="input-efeito" type="text" name="Possível autor" required placeholder="Escreva o nome ou características do suspeito"/>
                        </div>

                        {/*Local*/}
                        <div className="campo">
                            <label htmlFor="text">Local do ocorrido</label>
                            <input className="input-efeito" type="text" name="local do ocorrido" required placeholder="Escreva o endereço"/>
                        </div>

                        {/*Inserir imagem*/}
                        <div className="campo">
                            <label htmlFor="file">Imagem(opcional)</label>
                            <input className="input-efeito" type="file" name="Imagem(opcional)"/>
                        </div>

                        {/*Inserir video*/}
                        <div className="campo">
                            <label htmlFor="file">Vídeo(opcional)</label>
                            <input className="input-efeito" type="file" name="Vídeo(opcional)"/>
                        </div>

                        <div className="campo">
                            <label htmlFor="Text"> Descrição</label>
                            <textarea className="desc input-efeito" name="Descrição do ocorrido" placeholder="Descreva o caso da denúncia"></textarea>
                        </div>
                    </form>

                    {/*botoes*/}
                    <div className="botoes" >
                        <a href="../index.html">
                            <button type="submit" className="botao bt1"> VOLTAR</button>
                        </a>

                        <a href="../index.html">
                            <button type="submit" className="botao bt2"> ENVIAR</button>
                        </a>
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