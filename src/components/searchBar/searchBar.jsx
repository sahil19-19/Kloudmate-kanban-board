import { useState, useContext } from "react";

import { AppContext } from "../contexts/appContext";
import "./searchBar.css";

const SearchBar = () => {
    const [title, setTitle] = useState("");
    const { tasks, setSearchTasks } = useContext(AppContext);

    const titleChangeHandler = (event) => {
        setTitle(event.target.value);
        // console.log(event.target.value);
    };

    const titleSearchHandler = (event) => {
        event.preventDefault();
        if (title === "") {
            setSearchTasks([]);
            return;
        }
        const temp = tasks.filter((task) => {
            if (
                task.enteredTitle.indexOf(title) !== -1 ||
                title.indexOf(task.enteredTitle) !== -1
            ) {
                return true;
            } else return false;
        });
        // console.log(temp);
        setSearchTasks(temp);
    };

    return (
        <>
            <form className="search_bar" onSubmit={titleSearchHandler}>
                <input
                    type="text"
                    value={title}
                    onChange={titleChangeHandler}
                    placeholder="Search tasks by title"
                ></input>
                <button className="search_button">
                    Search
                </button>
            </form>
        </>
    );
};

export default SearchBar;
