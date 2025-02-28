import { useState, useEffect, useContext } from "react";
import "./dropZone.css";
import { AppContext } from "../contexts/appContext";

const DropZone = ({index, status}) => {
    const [dropVisible, setDropVisible] = useState(false);
    const {dropHandler} = useContext(AppContext);

    const enterZoneHandler = () => {
        setDropVisible(true);
    };

    const leaveZoneHandler = () => {
        setDropVisible(false);
    };

    const onDropHandler = () => {
        dropHandler(index, status);
        setDropVisible(false); // we need to set drop zone to false even when we drop the task Card
    }

    return (
        <div
            onDragEnter={enterZoneHandler}
            onDragLeave={leaveZoneHandler}
            className = {dropVisible ? "drop_zone" : "hidden_zone"}
            onDrop={onDropHandler}
            onDragOver = {event => event.preventDefault()}
        >
            Drop Here
        </div>
    );
};

export default DropZone;
