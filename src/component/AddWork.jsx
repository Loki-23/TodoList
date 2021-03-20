import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";

function AddWork(props) {
    const [listItem, setListItem] = useState({
        todo: "",
        description:"",
        deadline: "",
        time: ""
    })
    function Change(event) {
        const { name, value } = event.target;
        setListItem((prevItem) => {
            return {
                ...prevItem,
                [name]: value
            }
        })
    }
    function AddList(event) {
        props.toAdd(listItem);
        setListItem({
            todo: "",
            description:"",
            deadline: "",
            time: ""
        })
        event.preventDefault();
    }
    return (
        <div>
            <form>
            <div className="container1">
                <div className="box1">
                    <input onChange={Change} name="todo" type="text" placeholder="Enter Work to be done" value={listItem.todo} />
                    <input onChange={Change} name="deadline" type="text" placeholder="Deadline" value={listItem.deadline} />
                    <input onChange={Change} type="text" name="time" placeholder="Time require to complete the work" value={listItem.time} />
                </div>
                <div className="box2">
                    <textarea onChange={Change} rows="6" col="40" name="description" type="text" placeholder="Enter Description of Work to be done" value={listItem.description}  />
                </div>
            </div>
            <div className="container2">
                <Fab>
                    <button onClick={AddList}><AddIcon /></button>
                </Fab>
            </div>
            </form>
        </div>
    );
}

export default AddWork;