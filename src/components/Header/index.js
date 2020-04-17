import React from "react";

function Header(props) {
    return (
        <nav className={props.nav}>
            <div className="container">
            <div  className={props.row}>
            <div className={props.column}><button type="button" className="btn btn-secondary" onClick={props.refreshPage}> <span>Princess Memory Game</span> </button> '
            </div>
            <div className={props.column}><h3>Click an image to begin</h3>
            </div>               
            <div className={props.column}>Score:{props.score} | Top Score: 
            </div>
            </div>
            </div>
        </nav>
    )
}

export default Header;