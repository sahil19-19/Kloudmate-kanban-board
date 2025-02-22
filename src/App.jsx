import { useState } from "react";
// import reactLogo from './assets/react.svg'
import "./App.css";
import Filter from "./components/filter/filter";
import Column from "./components/column/column";

function App() {
    return (
		<>
			<section className="filter-container">
				<Filter/>
			</section>

			<section className="column-container">
				<Column />
				<Column />
				<Column />
			</section>
		</>
	)
}

export default App;
