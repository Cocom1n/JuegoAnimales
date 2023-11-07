import React, { useState, useEffect } from 'react';

function Juego({ nombreJugador, nombreJugador2, puntaje, puntaje2, setPuntaje, setPuntaje2, alTerminar, rondaActual,setRondaActual, segundoTurno}) {
    const [animalObjetivo, setAnimalObjetivo] = useState('');
    const [opciones, setOpciones] = useState([]);
    const [esCorrecto, setEsCorrecto] = useState(null);
    const [rondasTotales, setRondasTotales] = useState(Math.floor(Math.random() * 6) + 5);
    const [puedeHacerClic, setPuedeHacerClic] = useState(true);

    const obtenerAnimalAleatorio = () => {
        const animales = ['gato', 'perro', 'vaca', 'leon', 'jirafa', 'cebra'];
        const indiceAleatorio = Math.floor(Math.random() * animales.length);
        return animales[indiceAleatorio];
    };

    const obtenerOpcionesAleatorias = () => {
        const animalCorrecto = obtenerAnimalAleatorio();
        let opcionesAleatorias = [animalCorrecto];

        while (opcionesAleatorias.length < 3) {
            const opcion = obtenerAnimalAleatorio();
            if (!opcionesAleatorias.includes(opcion)) {
                opcionesAleatorias.push(opcion);
            }
        }

        opcionesAleatorias = opcionesAleatorias.sort(() => Math.random() - 0.5);

        setOpciones(opcionesAleatorias);
        setAnimalObjetivo(animalCorrecto);
    };

    const verificarRespuesta = (animalSeleccionado) => {
                if(segundoTurno == true)
                {
                    if (animalSeleccionado === animalObjetivo) {
                        setEsCorrecto(true);
                        setPuntaje2(puntaje2 + 1);
                    } else {
                        setEsCorrecto(false);
                    }
                    setPuedeHacerClic(false);
                }
                else{
                    if (animalSeleccionado === animalObjetivo) {
                        setEsCorrecto(true);
                        setPuntaje(puntaje + 1);
                    } else {
                        setEsCorrecto(false);
                    }
                    setPuedeHacerClic(false);
                }
        };

    const siguienteRonda = () => {
        
        if (rondaActual < rondasTotales) {
            setRondaActual(rondaActual + 1);
            setEsCorrecto(null);
            setPuedeHacerClic(true);
            obtenerOpcionesAleatorias();
        } else if(segundoTurno == true){
            alTerminar(puntaje);
        }
        else if(segundoTurno == false){
            alTerminar(puntaje2);
        }
    };

    const opcionesDeshabilitadas = esCorrecto !== null;

    useEffect(() => {
        obtenerOpcionesAleatorias();
    }, []);

    return (
        <div>
            <h1>¿Cuál es este animal?</h1>
            <p>Ronda actual: {rondaActual}</p>
            <img src={`img/${animalObjetivo}.png`} alt={animalObjetivo} />
            <div>
                {opciones.map((animal) => (
                    <button
                        key={animal}
                        onClick={() => verificarRespuesta(animal)}
                        disabled={!puedeHacerClic || opcionesDeshabilitadas}
                    >
                        {animal}
                    </button>
                ))}
            </div>
            {esCorrecto === true && <p>¡Correcto!</p>}
            {esCorrecto === false && <p>¡Incorrecto!</p>}
            <button onClick={siguienteRonda}>Siguiente</button>
        </div>
    );
}

export default Juego;

