import React from 'react';

function Cita({cita, index, eliminarCita}){
    return(
        <div className="cita">
            <p>Paciente: <span>{cita.paciente}</span></p>
            <p>Facultad: <span>{cita.facultad}</span></p>
            <p>Deporte: <span>{cita.deporte}</span></p>
            <p>Fecha: <span>{cita.fecha}</span></p>
            <p>Hora: <span>{cita.hora}</span></p>
            <p>Síntomas: <span>{cita.sintomas}</span></p>
            <button
            onClick={() => eliminarCita(index)}
            type="button"
            className="button eliminar u-full-width"
            >Eliminar X
            </button>
        </div>
    )
}

export default Cita;