import React from 'react';
import Inicio from './Inicio';

function Felicitaciones({ nombreJugador, puntaje, setMostrarFelicitaciones, setMostrarJuego, setRondaActual}) {
    let listaNombres = [];
    listaNombres.push(nombreJugador);
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
            <h1>¡Felicitaciones</h1>
            <p>Tu puntaje total es: {puntaje}</p>
            <ul>
                lista de jugadores
                {
                    listaNombres.map((nombres) => (
                        <li key={nombres}> {nombres} </li>
                    ))
                }
            </ul>
            <button onClick={volverAInicio}>
                volver a inicio
            </button>
        </div>
    );
}

export default Felicitaciones;
