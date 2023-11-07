import React, { useState, useEffect } from 'react';
import animales from '../data/animales.json'

function Juego({ nombreJugador, puntaje, setPuntaje, alTerminar, rondaActual,setRondaActual }) {
    const [animalObjetivo, setAnimalObjetivo] = useState({
        "img":"",
        "code":"",
        "name":"",
        "description":"",
        "sound":""
    });

// function Juego({ nombreJugador, nombreJugador2, puntaje, puntaje2, setPuntaje, setPuntaje2, alTerminar, rondaActual,setRondaActual, segundoTurno}) {
    // const [animalObjetivo, setAnimalObjetivo] = useState('');

    const [opciones, setOpciones] = useState([]);
    const [esCorrecto, setEsCorrecto] = useState(null);
    const [rondasTotales, setRondasTotales] = useState(Math.floor(Math.random() * 6) + 5);
    const [puedeHacerClic, setPuedeHacerClic] = useState(true);

    const obtenerAnimalAleatorio = () => {
        //const animales = animalsData;
        const indiceAleatorio = Math.floor(Math.random() * animales.length);
        return animales[indiceAleatorio];
    };

    const obtenerOpcionesAleatorias = () => {
        const animalCorrecto = obtenerAnimalAleatorio();
        let opcionesAleatorias = [animalCorrecto];

        while (opcionesAleatorias.length < 3) {
            const opcion = obtenerAnimalAleatorio();
            if (!opcionesAleatorias.some((animal) => animal.code === opcion.code)) {
                opcionesAleatorias.push(opcion);
            }
            //.some() verifica si al menos un objeto del array cumple con la condicion
            //en este caso verificara si los codigos de ambos objetos son distintos
            //en caso de que no haya duplicado va a agregar la opcion a el aray de opciones aleatorias
        }

        opcionesAleatorias = opcionesAleatorias.sort(() => Math.random() - 0.5);

        setOpciones(opcionesAleatorias);
        setAnimalObjetivo(animalCorrecto);
    };

    const verificarRespuesta = (animalSeleccionado) => {

                if(segundoTurno == true)
                {
                    if (animalSeleccionado.name === animalObjetivo.name) {
                        setEsCorrecto(true);
                        setPuntaje2(puntaje2 + 1);
                        let animalSound = new Audio(animalObjetivo.sound);
                        animalSound.play();
                    } else {
                        setEsCorrecto(false);
                    }
                    setPuedeHacerClic(false);
                }
                else{
                    if (animalSeleccionado.name === animalObjetivo.name) {
                        setEsCorrecto(true);
                        setPuntaje(puntaje + 1);
                        let animalSound = new Audio(animalObjetivo.sound);
                        animalSound.play();
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

            <h1>{nombreJugador}, What animal is it?</h1>
            <p>Actual round: {rondaActual}</p>
            {/* <img src={`img/${animalObjetivo}.png`} alt={animalObjetivo} /> */}
            <img src={animalObjetivo.img} alt={animalObjetivo.name} />
            <p> {animalObjetivo.description}</p>

            <div>
                {opciones.map((animal) => (
                    <button
                        key={animal.code}
                        onClick={() => verificarRespuesta(animal)}
                        disabled={!puedeHacerClic || opcionesDeshabilitadas}
                    >
                        {animal.name}
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