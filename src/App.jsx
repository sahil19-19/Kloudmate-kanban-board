import { useEffect, useState } from "react";
import "./App.css";
// import Filter from "./components/filter/filter";
import Column from "./components/column/column";
import { AppContext } from "./components/contexts/appContext";
import NewTask from "./components/newTask/newTask";

const prevTasks = localStorage.getItem("tasks");

function App() {
    const [tasks, setTasks] = useState(JSON.parse(prevTasks) || []);
	const [draggedCard, setDraggedCard] = useState(null);
    // console.log(tasks);

	const dropHandler = (index, status) => {
		console.log(`${draggedCard} is going to column ${status} and index ${index}`)
	}

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    return (
        <>
            <AppContext.Provider value={{ tasks, setTasks, setDraggedCard, dropHandler }}>
                <section className="filter-container">
                    {/* <TaskForm /> */}
                    <NewTask />
                </section>

                <section className="column-container">
                    <Column title="To Do" status="todo" />
                    <Column title="In Progress" status="in_progress" />
                    <Column title="Done" status="done" />
                </section>
            </AppContext.Provider>
        </>
    );
}

export default App;
