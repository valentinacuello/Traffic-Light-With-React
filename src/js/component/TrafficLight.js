import React, { useState } from "react";
import "../../styles/index.scss";

const TrafficLight = () => {
	const [luz, setLuz] = useState("off"); //es el estado inicial de luz
	//luz es el estado (es una variable que guarda algo que se actualiza)
	//setLuz es una función que actualiza el estado (o sea, luz)

	const prenderLuz = color => setLuz(color);

	//La función de arriba sería lo mismo que escribir lo de acá debajo
	// function prenderLuz(color){
	//     setLuz(color)
	// };
	//Declaro una función "prenderLuz()" a quién le paso el parámetro color, dentro llamo a la función setLuz pasándole ese parámetro

	return (
		<div className="traffic-light-container">
			<div className="light-container">
				<div
					className={luz == "r" ? "red encendida" : "red"}
					onClick={() => prenderLuz("r")}>
					<div className="red-glow"></div>
				</div>
				<div
					className={luz == "y" ? "yellow encendida" : "yellow"}
					onClick={() => prenderLuz("y")}>
					<div className="yellow-glow"></div>
				</div>
				<div
                    className={luz == "g" ? "green encendida" : "green"}//acá planteo un ternario donde pregunto si el estado luz
                    //es igual a "g" (parametro que le paso a la función), si ese parámetro es true, entonces mediante la clase
                    //encendida en css le agrego un display block a las clases que tienen el "glow", sino, esa clase no se le agrega
                    //queda solo la clase green (o yellow o red)
					onClick={() => prenderLuz("g")}>
					<div className="green-glow"></div>
				</div>
			</div>
		</div>
	);
};

export default TrafficLight;
