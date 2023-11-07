import React, { useState, useEffect } from 'react';
import animalsData from '../data/animales.json'

function Juego({ nombreJugador, puntaje, setPuntaje, alTerminar, rondaActual,setRondaActual }) {
    const [animalObjetivo, setAnimalObjetivo] = useState({
        "img":"",
        "code":"",
        "name":"",
        "description":"",
        "sound":""
    });
    const [opciones, setOpciones] = useState([]);
    const [esCorrecto, setEsCorrecto] = useState(null);
    const [rondasTotales, setRondasTotales] = useState(Math.floor(Math.random() * 6) + 5);
    const [puedeHacerClic, setPuedeHacerClic] = useState(true);

    const obtenerAnimalAleatorio = () => {
        const animales = animalsData;
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
        if (animalSeleccionado === animalObjetivo) {
            setEsCorrecto(true);
            setPuntaje(puntaje + 1);
            let animalSound = new Audio(animalObjetivo.sound);
            animalSound.play();
        } else {
            setEsCorrecto(false);
        }
        setPuedeHacerClic(false);
    };

    const siguienteRonda = () => {
        if (rondaActual < rondasTotales) {
            setRondaActual(rondaActual + 1);
            setEsCorrecto(null);
            setPuedeHacerClic(true);
            obtenerOpcionesAleatorias();
        } else {
            alTerminar(puntaje);
        }
    };

    const opcionesDeshabilitadas = esCorrecto !== null;

    useEffect(() => {
        obtenerOpcionesAleatorias();
    }, []);

    return (
        <div>
            <h1>{nombreJugador}, What animal is it?</h1>
            <p>Actual round: {rondaActual}</p>
            <img src={animalObjetivo.img} alt={animalObjetivo.name} />
            <div>
                {opciones.map((animalObj) => (
                    <button
                        key={animalObj.name}
                        onClick={() => verificarRespuesta(animalObj)}
                        disabled={!puedeHacerClic || opcionesDeshabilitadas}
                    >
                        {animalObj.name}
                    </button>
                ))}
            </div>
            <p>Clue = {animalObjetivo.description}</p>
            {esCorrecto === true && <p>Correct!</p>}
            {esCorrecto === false && <p>Incorrect!</p>}
            <button onClick={siguienteRonda}>Next</button>
        </div>
    );
}

export default Juego;

