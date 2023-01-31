import { useState } from "react";
import "./App.css";
import Testimonial from "./components/Testimonial";
import Photo1 from "../src/img/profile1.jpg";
import Photo2 from "../src/img/profile2.jpg";
import Photo3 from "../src/img/profile3.jpg";
import Button from "./components/Button";

function App() {
	const [theme, setTheme] = useState("light");
	function onClickFn() {
		if (theme == "light") {
			setTheme("dark");
		} else {
			setTheme("light");
		}
	}
	return (
		<div className={"main-container " + theme}>
			<Button onClickFn={onClickFn} value={theme == "dark" ? "light" : "dark"} />
			<Testimonial
				img={Photo1}
				name="Michael Scott"
				stars="⭐⭐⭐⭐⭐"
				text="Wikipedia is the best thing ever. Anyone in the world can write anything they want about any subject so you know you are getting the best possible information"
			/>
			<Testimonial
				img={Photo2}
				name="Jim Halpert"
				stars="⭐⭐⭐"
				text="What would I do with all this useless information in my head? You know? Tonnage price of manila folders? Um, Pam’s favorite flavor of yogurt, which is mixed berry"
			/>
			<Testimonial
				img={Photo3}
				name="Dwight Schrute"
				stars="⭐⭐⭐⭐"
				text="No, don’t call me a hero. Do you know who the real heroes are? The guys who wake up every morning and go into their normal jobs, and get a distress call from the commissioner and take off their glasses and change into capes and fly around fighting crime. Those are the real heroes"
			/>
		</div>
	);
}
export default App;
