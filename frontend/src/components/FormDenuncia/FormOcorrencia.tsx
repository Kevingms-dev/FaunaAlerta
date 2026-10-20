import './FormDenuncia.css'

type Props = { tipo: "alerta" | "denuncia"};

function FormOcorrencia ({ tipo } : Props) {
    return (
        <form className="form-ocorrencia">
            {tipo === "alerta" &&(
                <div>
                    <input type="text" id="nome-especie" name="nome" className="" placeholder="Nome da espécie"></input>
                </div>
            )}
            <input>
            </input>
        
            <div>
                <button className="btn-form">Enviar</button>
            </div>
        </form>
    )
}

export default FormOcorrencia