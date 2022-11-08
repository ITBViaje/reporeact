import './Lista.css'
const Lista = props => {
    return (
        <div className="col-sm-10 d-flex justify-content-center uno">
            <ul>
                <li key={1}>Sitio Estático ITBV</li>
                <li key={2}>Armar Aplicación sencilla React</li>
                <li key={3}>Preparar Presentación Final</li>
                <li key={4}>Continuar estudiando React</li>
                <li key={5}>Ser perseverantes</li>
            </ul>
        </div>
    )
}

export default Lista