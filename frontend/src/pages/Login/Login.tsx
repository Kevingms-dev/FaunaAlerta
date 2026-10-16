import { useState } from 'react'
import './Login.css'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom' 
import '../../global/global.css'

function Login() {

    return (
        <>
            <Helmet>
                <title>LOGIN - FaunaAlerta</title>
            </Helmet>
            
            <main className="d-flex align-items-center justify-content-center py-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-8 col-lg-6">

                            <h1 className="text-center mb-4 titulo-cadastro">EFETUE O LOGIN</h1>

                            <div className="card-cadastro p-4 p-sm-5">
                                <form>

                                    <div className="mb-4">
                                        <label className="form-label label-cadastro">E-mail</label>
                                        <input type="email" className="form-control input-cadastro" placeholder="E-mail" required id="email"/>
                                    </div>

                                    <div className="mb-5">
                                        <label className="form-label label-cadastro">Senha</label>
                                        <input type="password" className="form-control input-cadastro" placeholder="Senha" required id="senha"/>
                                    </div>

                                    <div className="text-center">
                                        <button type="submit" className="btn btn-cadastro-laranja">ENTRAR</button>
                                    </div>
                                    <br/>
                                        <p className="nao-possui text-center mt-3 mb-0">
                                            Não possui conta?
                                        </p>

                                        <p className="clique-aqui text-center mt-3 mb-0">
                                            <Link to="/cadastro"><b>Clique aqui</b></Link>
                                        </p>

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