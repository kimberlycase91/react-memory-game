import React from "react";

 function Column (props) {
    return (
        <div className={props.column}>
        {props.children}
        </div>
    )
}

export default Column;