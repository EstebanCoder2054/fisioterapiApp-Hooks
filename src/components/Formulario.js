import React, {useState, Fragment} from 'react';

function Formulario({crearCita}){

    const stateInicial = {
        paciente: '',
        facultad: '',
        deporte: '',
        fecha: '',
        hora: '',
        sintomas: ''
    }

    const [cita, actualizarCita] = useState(stateInicial);

    const actualizarState = (e) => {
        actualizarCita({
            ...cita,
            [e.target.name] : e.target.value
        });
    }

    const enviarCita = (e) => {
        e.preventDefault();

        //pasar la cita hacia el componente principal
        crearCita(cita)
        
        //reiniciar el state
        actualizarCita(stateInicial);

        console.log(cita);
    }

    

    return(
        
    <Fragment>
        <h2>Crear Cita</h2>

        <form 
        onSubmit={enviarCita}
        >
                    <label>Nombre Paciente</label>
                    <input 
                        type="text" 
                        name="paciente"
                        className="u-full-width" 
                        placeholder="Nombre Paciente"
                        onChange={actualizarState} 
                        value={cita.paciente}
                    />

                    <label>Facultad</label>
                    <input 
                        type="text" 
                        name="facultad"
                        className="u-full-width"  
                        placeholder="Ej. Ingeniería, Ciencias exactas, etc"
                        onChange={actualizarState} 
                        value={cita.facultad}
                    />

                    <label>Deporte</label>    
                    <input 
                        type="text" 
                        name="deporte"
                        className="u-full-width"  
                        placeholder="Ej. Rugby, Karate, etc" 
                        onChange={actualizarState}
                        value={cita.deporte}
                    />

                    <label>Fecha</label>
                    <input 
                        type="date" 
                        className="u-full-width"
                        name="fecha"
                        onChange={actualizarState}
                        value={cita.fecha}
                    />               

                    <label>Hora</label>
                    <input 
                        type="time" 
                        className="u-full-width"
                        name="hora" 
                        onChange={actualizarState}
                        value={cita.hora}
                    />

                    <label>Sintomas</label>
                    <textarea 
                        className="u-full-width"
                        name="sintomas"
                        onChange={actualizarState}
                        value={cita.sintomas}
                    ></textarea>

                    <button 
                        type="submit"  
                        className="button-primary u-full-width">Agregar
                        </button>
            </form>
    </Fragment>
    )    
}

export default Formulario;