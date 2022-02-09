import React from "react";
import Proficiency from "./component/proficiency";
import Projects from "./component/projects";
import TechStack from "./component/techStack";
import HeadSection from "./component/Top";
function App() {
	return (
		<>
			<HeadSection />
			<TechStack />
			<Proficiency />
			<Projects />
		</>
	);
}

export default App;
