import React from 'react';
import "./Felicitaciones.css";

function Felicitaciones({ nombreJugador, puntaje }) {
    return (
        <div className='happy'>
            <h1 className='congratulations'>¡Congratulations, {nombreJugador}!</h1>
            <p className='score'>your total score is: {puntaje}</p>
        </div>
    );
}

export default Felicitaciones;
