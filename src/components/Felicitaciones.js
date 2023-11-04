import React from 'react';

function Felicitaciones({ nombreJugador, puntaje }) {
    return (
        <div>
            <h1>¡Congratulations, {nombreJugador}!</h1>
            <p>your total score is: {puntaje}</p>
        </div>
    );
}

export default Felicitaciones;
