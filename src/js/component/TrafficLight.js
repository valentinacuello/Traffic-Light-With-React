import React, { useState } from "react";
import "../../styles/index.scss";

const TrafficLight = () => {
	const [luz, setLuz] = useState("off");

	const prenderLuz = color => setLuz(color);

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
					className={luz == "g" ? "green encendida" : "green"}
					onClick={() => prenderLuz("g")}>
					<div className="green-glow"></div>
				</div>
			</div>
		</div>
	);
};

export default TrafficLight;
