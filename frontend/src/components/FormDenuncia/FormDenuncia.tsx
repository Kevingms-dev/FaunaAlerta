import './FormDenuncia.css'



function FormDenuncia () {
    return (
        <form className="form-denuncia">
            <div className="campo-denuncia">
                <select name="tipo-denuncia" id="tipo-denuncia" required>
                    <option value="Caça Ilegal">Caça Ilegal</option>
                    <option value="Pesca Ilegal"> Pesca Ilegal</option>
                    <option value="Maus-tratos">Maus-tratos</option>
                    <option value="Outros">Outros</option>
                </select>
                <input type="date" id="data-denuncia" name="data" className="" placeholder="Data do Evento" required></input>
            </div>
            <div className="denuncia-local">
                <input type="text" id="municipio-denuncia" name="municipio" placeholder="Digite o munícipo do evento" required></input>
                <select name="estados" id="uf-denuncia" required>
                    <option value="" selected disabled hidden>Estado</option>
                    <option value="AC">Acre</option>
                    <option value="AL">Alagoas</option>
                    <option value="AP">Amapá</option>
                    <option value="AM">Amazonas</option>
                    <option value="BA">Bahia</option>
                    <option value="CE">Ceara</option>
                    <option value="ES">Espirito Santo</option>
                    <option value="GO">Goias</option>
                    <option value="MA">Maranhão</option>
                    <option value="MT">Mato Grosso</option>
                    <option value="MS">Mato Grosso do Sul</option>
                    <option value="MG">Minas Gerais</option>
                    <option value="PA">Pará</option>
                    <option value="PB">Paraiba</option>
                    <option value="PR">Paraná</option>
                    <option value="PE">Pernambuco</option>
                    <option value="PI">Piauí</option>
                    <option value="RJ">Rio de Janeiro</option>
                    <option value="RN">Rio Grande do Norte</option>
                    <option value="RS">Rio Grande do Sul</option>
                    <option value="RO">Rondônia</option>
                    <option value="RR">Roraima</option>
                    <option value="SC">Santa Catarina</option>
                    <option value="SP">São Paulo</option>
                    <option value="SE">Sergipe</option>
                    <option value="TO">Tocantins</option>
                </select>
            </div>
            <div>
                <input type="text" id="localizacao-denuncia" name="local" placeholder="Digite a rua ou ponto de refência próximo"></input>
            </div>
            <div>
                <textarea name="descricao" id="descricao-denuncia" placeholder="Digite a descrição do evento"></textarea>
            </div>
            <div className="file-box-denuncia">
                <input type="file" id="file-denuncia" name=""></input>
                <label htmlFor="file-denuncia" className="file-label-denuncia">
                    <span className="file-text-denuncia">Escolha um arquivo...</span>
                </label>
            </div>
        
            <div className="container-btn-form">
                <button className="denuncia-enviar">Enviar</button>
                <button className="denuncia-voltar">Voltar</button>
            </div>
        </form>
    )
}

export default FormDenuncia