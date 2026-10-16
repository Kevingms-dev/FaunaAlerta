import { useState } from 'react'
import './Home.css'
import { Helmet } from 'react-helmet-async'
import '../../global/global.css'
import noticiaa1 from '../../assets/noticia1.jpg'
import noticiaa2 from '../../assets/noticia2.jpeg'
import noticiaa3 from '../../assets/noticia3.jpg'
import Logo_IBAMA from '../../assets/Logo_IBAMA.svg.png'
import logoipe from '../../assets/logoipe.png'
import ambientallogo from '../../assets/ambientallogo.png'
import ICMBioLOGO from '../../assets/ICMBioLOGO.png.png'
import Logo1 from '../../assets/Logo1.png'
import twitterxicone from '../../assets/twitterxicone.png'
import instragram from '../../assets/instagram.png'
import facebook from '../../assets/facebook.png'

function Home() {

  return (
    <>
      <Helmet>
        <title>FaunaAlerta</title>
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

        {/* BANNER */}
        <section className="banner">
          <div className="overlay">
            <div className="container h-100 d-flex align-items-center">
              <a href="pages/denuncia.html" className="btn">
                DENUNCIE AQUI
              </a>
            </div>
          </div>
        </section>

        {/* COMO FUNCIONA */}
        <section className="como-funciona py-5">
          <div className="container">

            <h2 className="section-title text-center mb-4">COMO FUNCIONA?</h2>

            <div className="funciona-card mx-auto">
              <p className="funciona-descricao text-center mb-4">
                Somos como se fosse uma ponte para você, facilitando a sua denúncia
                e garantindo que ela chegue nas autoridades certas
              </p>

              {/* Fluxo: Usuário → Alerta → Autoridade */}
              <div className="fluxo d-flex align-items-center justify-content-center gap-3">

                {/* Usuário */}
                <div className="fluxo-item text-center">
                  <i className="bi bi-person-fill fluxo-icon"></i>
                </div>

                {/* Linha + Ícone de alerta */}
                <div className="fluxo-linha d-flex align-items-center flex-grow-1 position-relative">
                  <div className="linha"></div>
                  <div className="fluxo-alerta">
                    <i className="bi bi-exclamation-circle-fill"></i>
                  </div>
                </div>

                {/* Autoridade */}
                <div className="fluxo-item text-center">
                  <i className="bi bi-person-badge-fill fluxo-icon"></i>
                </div>

              </div>
            </div>

          </div>
        </section>

        {/* ===== NOTÍCIAS (seção reservada para carrossel futuro) ===== */}
        {/* ===== NOTÍCIAS ===== */}
        <section className="noticias py-5">
          <div className="container">

            <h2 className="section-title text-center mb-4">NOTÍCIAS</h2>

            <div id="carouselNoticias" className="carousel slide carousel-fade" data-bs-ride="carousel">

              {/* Indicadores */}
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselNoticias" data-bs-slide-to="0" className="active"></button>
                <button type="button" data-bs-target="#carouselNoticias" data-bs-slide-to="1"></button>
                <button type="button" data-bs-target="#carouselNoticias" data-bs-slide-to="2"></button>
              </div>

              {/* Slides */}
              <div className="carousel-inner rounded-4 overflow-hidden shadow">

                {/* Slide 1 */}
                <div className="carousel-item active">
                  <img src={noticiaa1} className="d-block w-100 noticia-img" alt="Notícia 1" />

                  <div className="carousel-caption custom-caption">
                    <h3>Resgate de animais silvestres cresce no Brasil</h3>
                    <p>
                      Organizações ambientais registram aumento nas denúncias
                      e salvamentos de fauna em áreas urbanas.
                    </p>
                  </div>
                </div>

                {/* Slide 2 */}
                <div className="carousel-item">
                  <img src={noticiaa2} className="d-block w-100 noticia-img" alt="Notícia 2" />

                  <div className="carousel-caption custom-caption">
                    <h3>Combate ao tráfico de animais é intensificado</h3>
                    <p>
                      Autoridades ambientais reforçam operações em rodovias
                      e fronteiras brasileiras.
                    </p>
                  </div>
                </div>

                {/* Slide 3 */}
                <div className="carousel-item">
                  <img src={noticiaa3} className="d-block w-100 noticia-img" alt="Notícia 3" />

                  <div className="carousel-caption custom-caption">
                    <h3>Educação ambiental nas escolas</h3>
                    <p>
                      Projetos educativos incentivam crianças e jovens
                      a protegerem a fauna brasileira.
                    </p>
                  </div>
                </div>

              </div>

              {/* Botões */}
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselNoticias" data-bs-slide="prev">
                <span className="carousel-control-prev-icon"></span>
              </button>

              <button className="carousel-control-next" type="button" data-bs-target="#carouselNoticias" data-bs-slide="next">
                <span className="carousel-control-next-icon"></span>
              </button>

            </div>
          </div>
        </section>

        {/* ===== PARCEIROS ===== */}
        <section className="parceiros py-5">
          <div className="container">

            <h2 className="section-title text-center mb-4">PARCEIROS</h2>

            <div className="row justify-content-center align-items-center g-4">

              {/* IBAMA */}
              <div className="col-6 col-md-3 text-center">
                <div className="parceiro-card">
                  <img src={Logo_IBAMA} alt="IBAMA" className="parceiro-logo" />
                  <p className="parceiro-nome"><br /></p>
                </div>
              </div>

              {/* IPÊ */}
              <div className="col-6 col-md-3 text-center">
                <div className="parceiro-card">
                  <img src={logoipe} alt="IPÊ" className="parceiro-logo" />
                  <p className="parceiro-nome"></p>
                </div>
              </div>

              {/* AMBIENTAL */}
              <div className="col-6 col-md-3 text-center">
                <div className="parceiro-card">
                  <img src={ambientallogo} alt="Ambiental" className="parceiro-logo" />
                  <p className="parceiro-nome"></p>
                </div>
              </div>

              {/* ICMBio */}
              <div className="col-6 col-md-3 text-center">
                <div className="parceiro-card">
                  <img src={ICMBioLOGO} alt="ICMBio" className="parceiro-logo" />
                  <p className="parceiro-nome"></p>
                </div>
              </div>

            </div>

          </div>
        </section>

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

export default Home
