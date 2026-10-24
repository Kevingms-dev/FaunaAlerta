import './Perfil.css'
import { Helmet } from 'react-helmet-async'
import '../../global/global.css'

function Perfil() {


    return (
        <>
            <Helmet>
                <title>PERFIL - FaunaAlerta</title>
            </Helmet>
            
            <main className="box-perfil">
                <div className="container-perfil">
                    <h1>Histórico</h1>
                    
                </div>
            </main>
        </>
    )
}

export default Perfil