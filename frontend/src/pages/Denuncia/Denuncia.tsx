import { useState } from 'react'
import './Denuncia.css'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom' 
import '../../global/global.css'

function Login() {

    return (
        <>
            <Helmet>
                <title>DENÚNCIA - FaunaAlerta</title>
            </Helmet>
            
            <main>
                <h1 className="Titulo">REGISTRE SUA DENÚNCIA</h1>

                {/* Formulário de denúncia */}
                <div className="conteiner">
                    <form>
                        <div className="campo">
                            <label htmlFor="opcao-denuncia">Tipo de denúncia</label>
                            {/* Campos de seleção do tipo de denúncia */}
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

                        {/* Autor do crime */}
                        <div className="campo">
                            <label htmlFor="text">Possível autor</label>
                            <input className="input-efeito" type="text" name="Possível autor" required placeholder="Escreva o nome ou características do suspeito"/>
                        </div>

                        {/* Local */}
                        <div className="campo">
                            <label htmlFor="text">Local do ocorrido</label>
                            <input className="input-efeito" type="text" name="local do ocorrido" required placeholder="Escreva o endereço"/>
                        </div>

                        {/* Inserir imagem */}
                        <div className="campo">
                            <label htmlFor="file">Imagem (opcional)</label>
                            <input className="input-efeito" type="file" name="Imagem(opcional)"/>
                        </div>

                        {/* Inserir vídeo */}
                        <div className="campo">
                            <label htmlFor="file">Vídeo (opcional)</label>
                            <input className="input-efeito" type="file" name="Vídeo(opcional)"/>
                        </div>

                        <div className="campo">
                            <label htmlFor="Text">Descrição</label>
                            <textarea className="desc input-efeito" name="Descrição do ocorrido" placeholder="Descreva o caso da denúncia"></textarea>
                        </div>
                    </form>

                    <div className="botoes">
                        <Link to="/">
                            <button type="button" className="botao bt1">VOLTAR</button>
                        </Link>

                        <Link to="/">
                            <button type="button" className="botao bt2">ENVIAR</button>
                        </Link>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Login