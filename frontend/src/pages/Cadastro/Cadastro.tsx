import { useState } from 'react'
import './Cadastro.css'
import { Helmet } from 'react-helmet-async'
import '../../global/global.css'

function Login() {


    return (
        <>
            <Helmet>
                <title>Cadastro - FaunaAlerta</title>
            </Helmet>
            
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
        </>
    )
}

export default Login