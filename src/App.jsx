import { useEffect, useState } from "react";
import "./App.css";
import Column from "./components/column/column";
import { AppContext } from "./components/contexts/appContext";
import NewTask from "./components/newTask/newTask";

const prevTasks = localStorage.getItem("tasks");

function App() {
    const [tasks, setTasks] = useState(JSON.parse(prevTasks) || []);
    const[searchTasks, setSearchTasks] = useState([]); // to store tasks that we filter using search bar

	const [draggedCard, setDraggedCard] = useState(null);
    // console.log(tasks);

    // console.log(searchTasks);

	const dropHandler = (index, status) => {
		// console.log(tasks);
		// if(draggedCard == null) return;
		const draggedTask = tasks[draggedCard];

		const temp = tasks.filter((task,index) => index !== draggedCard);
		temp.splice(index, 0, {
			...draggedTask,
			enteredStatus : status
		})
		// console.log(temp);
		setTasks(temp);
	}

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    return (
        <>
            <AppContext.Provider value={{ tasks, setTasks, setDraggedCard, dropHandler, setSearchTasks, searchTasks }}>
                <section className="form-container">
                    {/* <TaskForm /> */}
                    <NewTask />
                </section>

                {/* <hr/> */}

                <section className="column-container">
                    <Column title="To Do" status="todo" />
                    <Column title="Ongoing" status="in_progress" />
                    <Column title="Done" status="done" />
                </section>
            </AppContext.Provider>
        </>
    );
}

export default App;
