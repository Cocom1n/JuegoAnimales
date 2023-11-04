import React from 'react';
import Inicio from './Inicio';

function Felicitaciones({ nombreJugador, puntaje, setMostrarFelicitaciones, setMostrarJuego, setRondaActual }) {

    const volverAInicio = ()=>{
        //se cambian los estados a false para volver a jugar el juego con un nuevo nombre y se reinicia el N° de rondas
        setMostrarFelicitaciones(false);
        setMostrarJuego(false);
        setRondaActual(1);
        return(
            <>
                <Inicio/>
            </>
            
        )
    }
    return (
        <div>
            <h1>¡Felicitaciones, {nombreJugador}!</h1>
            <p>Tu puntaje total es: {puntaje}</p>
            <button onClick={volverAInicio}>
                volver a inicio
            </button>
        </div>
    );
}

export default Felicitaciones;
