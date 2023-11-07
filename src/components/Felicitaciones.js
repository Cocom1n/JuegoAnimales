import React from 'react';
import Inicio from './Inicio';
import Juego from './Juego';
import "./Felicitaciones.css";


function Felicitaciones({ nombreJugador, nombreJugador2, puntaje, puntaje2, setMostrarFelicitaciones, setMostrarJuego, setRondaActual, setSegundoTurno, segundoTurno}) 
{
    const volverAInicio = ()=>{
        //se cambian los estados a false para volver a jugar el juego y se reinicia el N° de rondas
        setRondaActual(1);
        setSegundoTurno(true);
        setMostrarFelicitaciones(false);
        setMostrarJuego(true);
    }
    const MostrarGanador = ()=>{
        // if(segundoTurno == true)
        // {
        //     if (puntaje == puntaje2) {
        //         <p> Empate, Ambos puntajes son iguales</p>
        //     }
        //     else if(puntaje > puntaje2){
        //         <p> {nombreJugador} ha ganado la partida con {puntaje} puntos</p>
        //     }
        //     else if(puntaje2 > puntaje){
        //         <p> {nombreJugador2} ha ganado la partida con {puntaje2} puntos</p>
        //     }
        // }
        // else{
        //     <p>No se ingreso otro puntaje</p>
        // }
    }
    return (
        <div className='happy'>
            <h1 className='congratulations'>¡Congratulations, {nombreJugador}</h1>
            <p className='score'>Tu puntaje total es: 
                {segundoTurno == false && <p> {nombreJugador} tu puntaje es: {puntaje}</p>}
                {segundoTurno == true && <p> {nombreJugador2} tu puntaje es: {puntaje2}</p>}
            </p>

            <button onClick={volverAInicio}>
                Siguiente Jugador
            </button>

            <p className='score'>
                El ganador es: 
                <p> {puntaje == puntaje2 && <p>Empate ambos jugadores tienen los mismos puntos</p>} </p>
                <p> {puntaje > puntaje2 && <p>{nombreJugador} ha ganado la partida con {puntaje} puntos</p>} </p>
                <p> {puntaje2 > puntaje && <p>{nombreJugador2} ha ganado la partida con {puntaje2} puntos</p>} </p>
            </p>

        </div>
    );
}

export default Felicitaciones;
