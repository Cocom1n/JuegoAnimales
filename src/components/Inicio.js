import React, { useState } from 'react';
import Juego from './Juego';
import Felicitaciones from './Felicitaciones';
import "./Inicio.css";

function Inicio() {
const [nombreJugador, setNombreJugador] = useState(''); 
    const [nombreJugador2, setNombreJugador2] = useState('');
    const [mostrarJuego, setMostrarJuego] = useState(false);
    const [puntaje, setPuntaje] = useState(0);
    const [puntaje2, setPuntaje2] = useState(0);
    const [mostrarFelicitaciones, setMostrarFelicitaciones] = useState(false);
    const [rondaActual, setRondaActual] = useState(1);

    const [segundoTurno, setSegundoTurno] = useState(false);

    const manejarClickJugar = (nombre, nombre2) => {
        setNombreJugador(nombre);
        setNombreJugador2(nombre2);
        setMostrarJuego(true);
        setPuntaje(0);
        setPuntaje2(0);
        setMostrarFelicitaciones(false);
    };

    const alTerminar = (puntaje) => {
        if (segundoTurno == true) {
            setPuntaje(puntaje);
        }
        else if (segundoTurno == false)
        {
            setPuntaje2(puntaje);
        }
        setMostrarJuego(false);
        setMostrarFelicitaciones(true);
    };

    if (!mostrarJuego && !mostrarFelicitaciones) {
        return (
<<<<<<< HEAD
            <div>
                <h1>Ingresa nombre de los Jugadores</h1>
                <input
=======
            <div className='container'>
                <h1 className='h1'>Put your name here</h1>
                <input className='texto'
>>>>>>> andreapioli
                    type="text"
                    placeholder="Nombre del niño 1"
                    onChange={(e) => setNombreJugador(e.target.value)}
                />
<<<<<<< HEAD
                <input
                    type="text"
                    placeholder="Nombre del niño 2"
                    onChange={(e) => setNombreJugador2(e.target.value)}
                />
                <button onClick={() => manejarClickJugar(nombreJugador, nombreJugador2)}>Jugar</button>

=======
                <button className='boton' onClick={() => manejarClickJugar(nombreJugador)}>Jugar</button>
>>>>>>> andreapioli
            </div>
        );
    } else if (mostrarJuego) {
        return (
            <div>
                <Juego
                    nombreJugador={nombreJugador}
                    nombreJugador2={nombreJugador2}
                    puntaje={puntaje}
                    puntaje2={puntaje2}
                    setPuntaje={setPuntaje}
                    setPuntaje2={setPuntaje2}
                    alTerminar={alTerminar}
                    rondaActual={rondaActual}
                    setRondaActual={setRondaActual}
                    segundoTurno={segundoTurno}
                />
            </div>
        );
    } else if (mostrarFelicitaciones) {
        return (
            <div>
                <Felicitaciones 
                    nombreJugador={nombreJugador}
                    nombreJugador2={nombreJugador2}
                    puntaje={puntaje} 
                    puntaje2={puntaje2}
                    //se envian los estados para reiniciar el juego
                    setMostrarFelicitaciones={setMostrarFelicitaciones}
                    setMostrarJuego={setMostrarJuego}
                    setRondaActual={setRondaActual}
                    setSegundoTurno={setSegundoTurno}
                    segundoTurno={segundoTurno}
                />
            </div>
        );
    }
}

export default Inicio;
