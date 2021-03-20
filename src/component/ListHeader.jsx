import React from "react";

function ListHeader() {
    return (
        <div>
            <table>
                <tr>
                    <th className="work">To - do</th>
                    <th className="width">Deadline</th>
                    <th className="width">Time</th>
                    <th className="width">Remove</th>
                </tr>
            </table>
        </div>
    );
}

export default ListHeader;