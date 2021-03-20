import React, { useState } from "react";
import DetailsIcon from '@material-ui/icons/Details';
import DeleteIcon from '@material-ui/icons/Delete';

function ListContent(props) {
    const [isExpanded,setExpanded]=useState(false);

    function HandleClick(){
        props.onComplete(props.id);
    }

    function Expand(){
        setExpanded(true);
    }
    function UnExpand(){
        setExpanded(false);
    }


    return (
        <div>
            <table className="contentTable">
                <tr>
                    <td className="work">
                        {props.workToDo} 
                        <span><button onMouseOver={Expand} onMouseOut={UnExpand} style={{float:"right"}}><DetailsIcon /></button></span>
                        {isExpanded && <p>{props.description}</p>}
                    </td>

                    <td className="width">{props.date}</td>
                    <td className="width">{props.time}</td>
                    <td className="width"><button className="btn" onClick={HandleClick}><DeleteIcon /></button></td>
                </tr>
            </table>
        </div>
    );
}

export default ListContent;