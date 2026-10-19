import { useState } from 'react'
import './Denuncia.css'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom' 
import '../../global/global.css'

function Denuncia() {

    return (
        <>
            <Helmet>
                <title>DENÚNCIA - FaunaAlerta</title>
            </Helmet>
            
            <main className="box-form">
                <div className="container-form">
                    <h1 className="titulo">Seleciona uma opção:</h1>
                    <div className="btn-form">
                    <button className="btn-alerta" type="button">
                            Alerta
                        </button>
                        <button className="btn-denuncia" type="button">
                            Denúncia
                        </button>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Denuncia