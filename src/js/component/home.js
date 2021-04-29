import React from "react";
import TrafficLight from "./TrafficLight.js";

//include images into your bundle

//create your first component
export function Home() {
	return (
		<div className="text-center mt-5">
			<TrafficLight />
		</div>
	);
}
