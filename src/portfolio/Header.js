import React from 'react'

function Header(){
    const client = "Mohammed";
    const title = {
        x: "Cars",
        y: "medo"
    }

    const info = {
        name: "Mohammed",
        nick: "Alamri"
    }

    return(
        <div className="navbar bg-dark rounded text-white">
            Hello {`${info.name} ${info.nick}`}
            <h2>
                {client === "Mohammed" ? title.x : title.y} are my life.
            </h2>
        </div>
    );
}

export default Header;
