import { Helmet } from 'react-helmet-async'
import '../ONG/Ong.css'
import '../../global/global.css'
import {useState} from 'react'

//IMPORT DAS IMAGENS UTILIZADAS
import Viralata from '../../assets/Viralata.png'
import Upaga from '../../assets/UPAGA.png'
import SAVA from '../../assets/SAVA.jpg'
import aaac from '../../assets/aaac.jpeg'
import uips from '../../assets/uips.jpeg'
import adotegatinho from '../../assets/adotegatinho.jpeg'
import ampara from '../../assets/ampara.jpeg'
import caramelo from '../../assets/caramelo.jpeg'
import amordebicho from '../../assets/amordebicho.jpeg'
import BannerSava2 from '../../assets/BannerSAVA2.jpg'
import IconePet2 from '../../assets/IconePet2.svg'
import IconeAbrigo2 from '../../assets/IconeAbrigo2.svg'
function PagOng(){

    return(
        <>
            <Helmet>
               <title> Página Ong - FaunaAlerta</title>
            </Helmet>

            <main>
                <div className="container">
                    <img src={BannerSava2} style={{
                    objectFit: 'cover',
                    width: '100%',
                    height: '300px',
                    marginTop: '5%'}}
                    
                    alt="..."></img>
                </div>


                <section className="container py-5">
                    <div className="card mb-3" style={{maxWidth: 'auto'}}>
                        <div className="row g-0">
                            <div className="row">
                                <div className="container">
                                    <div className="row justify-content-end">
                                        <div className="card-Titulo col-8">
                                            <h1> Associação de Solidariedade A Vida Animal </h1>
                                        </div>
                                        <div className="containerIcones">
                                            <div className="row justify-item-inline justify-content-end">
                                                <img src={IconePet2} style={{width: '80px'}}></img>
                                                <img src={IconeAbrigo2} style={{width: '80px'}}></img>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                    
                                <div className="col-md-2">
                                    <img src={SAVA}
                                        style={{width: '300px',borderRadius: '20%',padding: 'auto',margin: '30%'}}
                                        alt="..."></img>
                                </div>

                                <div className="col-lg-10">
                                    <div className="card-Conteudo">
                                        <h2 className="card-subtitulo text-center"><b>“Solidariedade A Vida Animal.”</b></h2>
                                        <p className="h3 card-texto text-center"> Criada em 2006 e localizada em Diadema a S.A.V.A é uma ONG que realiza eventos e trabalhos em prol dos animais. 
                                            Foi pioneira na especialização de cuidar de animais com deficiência e idosos em São Paulo.</p>

                                                <i className="bi bi-facebook">SAVA</i>
                                            <i className="bi bi-instagram">@ongsava</i>
                                                <i className="bi bi-geo-alt">Diadema, São Paulo</i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="card" style={{width: 'rem'}}>
                    <div className="container">
                        <div className="row">
                            <div className="card-Titulo col col-lg-6">
                                <h1>COMO POSSO AJUDAR? </h1>
                            </div>
                        </div>
                    </div>
                    
                    <div className="card-body">
                        <h4 className="card-title"><b>A S.A.V.A aceita doações em :</b></h4>
                        <ul className="list" style={{listStyleType: 'none'}}>
                            <li className="h4"><i className="bi bi-check2-square">Suprimentos (Ração de gatos e cachorros, areia para gatos, <br></br>mantas, remédios e outros.)</i></li>
                            <li className="h4"><i className="bi bi-check2-square">Financeiramento(Pix, dinheiro)</i></li>
                            <li className="h4"><i className="bi bi-check2-square">Reciclagem(Tampinhas, lacres, lixo elêtronico)</i></li>
                        </ul>
                    </div>
                    <div className="row justify-content-end">
                        <div className="col-4">
                            <a href="#" className="btn-primary">DOE AQUI!</a>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

export default PagOng;