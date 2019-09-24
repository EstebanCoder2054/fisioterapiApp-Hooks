import React, {useState, useEffect, Fragment} from 'react';
import Formulario from './components/Formulario';
import Cita from './components/Cita';

function App(){

  //cargar las citas del localstorage como state inicial
  let citasIniciales = JSON.parse(localStorage.getItem('citas'));

  if(!citasIniciales){
    citasIniciales = [];
  }

  const [citas, guardarCita] = useState(citasIniciales);

  //agregar las nuevas citas al state
  const crearCita = (cita) => {
    const nuevasCitas = [...citas, cita];

    //para actualizar el state con la nueva data
    guardarCita(nuevasCitas);
    
    console.log(nuevasCitas);
  }

  //eliminar las citas dels state (citas)
  const eliminarCita = (index) => {
    const nuevasCitas = [...citas];
    nuevasCitas.splice(index, 1);
    guardarCita(nuevasCitas);
  }

  //CICLO DE VIDA

  useEffect( () => {
    let citasIniciales = JSON.parse(localStorage.getItem('citas'));

    if(citasIniciales){
      localStorage.setItem('citas', JSON.stringify(citas));
    }else{
      localStorage.setItem('citas', JSON.stringify([]))
    }

  }, [citas] );

  const titulo = Object.keys(citas).length === 0 ? 'No Hay Citas' : 'Administrar las citas'

  return(
    <Fragment>
      <h1>Administrador de pacientes - Fisioterapia 😷🤕🤒🤯</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario
              crearCita={crearCita}
            />
          </div>

          <div className="one-half column">
            <h2>{titulo}</h2>
            {citas.map((cita, index)=>{
              return(
                  <Cita 
                    key={index}
                    index={index}
                    cita={cita}
                    eliminarCita={eliminarCita}
                  />
              )
            })}
          </div>

        </div>
      </div>
    </Fragment>
  )
}

export default App;