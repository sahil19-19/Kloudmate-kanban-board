import { useState} from "react";
import "./App.css";
// import Filter from "./components/filter/filter";
import Column from "./components/column/column";
import TaskForm from "./components/taskForm/taskForm";
import {AppContext} from "./components/contexts/appContext";
import NewTask from "./components/newTask/newTask";

function App() {
	const [tasks, setTasks] = useState([]);

	console.log(tasks);

	return (
		<>
			<AppContext.Provider value={{tasks, setTasks}}>
				<section className="filter-container">
					{/* <TaskForm /> */}
					<NewTask/>
				</section>

				<section className="column-container">
					<Column title="To Do" status="todo" />
					<Column title="In Progress" status="in_progress" />
					<Column title="Done" status="done" />
				</section>
			</AppContext.Provider>
		</>
	)
}

export default App;
