import {useState} from 'react'
const AddItem = ({addItem}) => {
    const [title, setTitle] = useState('')
    const [category, setCategory] = useState('')
    const [day, setDay] = useState('')
    const [time, setTime] = useState('')

    const onSubmitItem = (e) => {
        //1- Cancelar el envío (es decir, impedimos el envío del formulario)
        e.preventDefault()
        //2- validar Datos
        if(!title) {
            alert('Añadir un title')
            return
        }
        if(!category){
            alert('Agregar una categoría')
        }
        //3- Ejecutar funcion prop: addItem
        addItem({title, category, day, time})
        //4- Limpiar el formulario.
        setTitle('')
        setCategory('')
        setDay('')
        setTime('')
    }
    return (
        <div className="col-sm-10">
    <div className="card bg-form-dark">
        <div className="card-header">
            <h2 className="text-muted">Agenda Alumnos Prácticas Profesionalizantes II</h2>
        </div>
        <div className="card-body">
            <form onSubmit={onSubmitItem}>
                <div className='form-group'>
                    <label>Título</label>
                    <input
                        type='text'
                        placeholder='Título del stream'
                        className="form-control"
                        value={title}
                        onChange= { (e) => setTitle(e.target.value)}
                    />
                </div>
                <div className="form-group">
                <label>Categoría</label>
                    <select
                        name="category"
                        className="form-control"
                        value={category}
                        onChange= { (e) => setCategory(e.target.value)}
                    >
                        <option value="">-- Elegir categoría --</option>
                            <option value="Ciencia y Tecnología">Ciencia y Tecnología</option>
                            <option value="Gameplays">Gameplays</option>
                            <option value="Música">Música</option>
                    </select>
                </div>
                <div className="form-group">
                <label>Día</label>
                    <select
                        name="day"
                        className="form-control"
                        value={day}
                        onChange= { (e) => setDay(e.target.value)}
                    >
                        <option value="">-- Elegir Día --</option>
                        <option value="Lunes">Lunes</option>
                        <option value="Martes">Martes</option>
                        <option value="Miércoles">Miércoles</option>
                        <option value="Jueves">Jueves</option>
                        <option value="Viernes">Viernes</option>
                        <option value="Sábado">Sábado</option>
                        <option value="Domingo">Domingo</option>
                    </select>
                </div>
                <div className='form-group'>
                    <label>Hora</label>
                    <input
                        type='time'
                        className="form-control"
                        value={time}
                        onChange= { (e) => setTime(e.target.value)}
                    />
                </div>
                <br/>
                <div className="form-group">
                    <input
                        type="submit"
                        className="btn btn-primary btn-add-item"
                        value="Añadir Tarea"
                    />
                </div>
            </form>
        </div>
    </div>
</div>
    )
}

export default AddItem