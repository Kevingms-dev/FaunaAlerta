import './FormAlerta.css'

function FormOcorrencia () {
    return (
        <form className="form-alerta">
            <div className="campo-alerta">
                <input type="text" id="nome-especie" name="nome" className="" placeholder="Nome da espécie"></input>
                <input type="date" id="data-alerta" name="data" className="" placeholder="Data do Evento" required></input>
            </div>
            <div className="alerta-local">
                <input type="text" id="municipio-alerta" name="municipio" placeholder="Digite o munícipo do evento" required></input>
                <select name="estados" id="uf-alerta" required>
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
                <input type="text" id="localizacao-alerta" name="local" placeholder="Digite a rua ou ponto de refência próximo"></input>
            </div>
            <div>
                <textarea name="descricao" id="descricao-alerta" placeholder="Digite a descrição do evento"></textarea>
            </div>
            <div className="file-box-alert">
                <input type="file" id="file-alerta" name=""></input>
                <label htmlFor="file-alerta" className="file-label-alerta">
                    <span className="file-text-alerta">Escolha um arquivo...</span>
                </label>
            </div>
        
            <div className="container-btn">
                <button className="alerta-enviar">Enviar</button>
                <button className="alerta-voltar">Voltar</button>
            </div>
        </form>
    )
}

export default FormOcorrencia