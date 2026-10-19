import { useState } from 'react'
import './Perfil.css'
import { Helmet } from 'react-helmet-async'
import '../../global/global.css'

function Perfil() {


    return (
        <>
            <Helmet>
                <title>PERFIL - FaunaAlerta</title>
            </Helmet>
            
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
        </>
    )
}

export default Perfil