import { useState } from "react";
// import reactLogo from './assets/react.svg'
import "./App.css";
// import Filter from "./components/filter/filter";
import Column from "./components/column/column";
import TaskForm from "./components/taskForm/taskForm";

function App() {
	const [tasks, setTasks] = useState([]);
    return (
		<>
			<section className="filter-container">
				<TaskForm />
			</section>

			<section className="column-container">
				<Column title="To Do"/>
				<Column title="In Progress"/>
				<Column title="Done"/>
			</section>
		</>
	)
}

export default App;
