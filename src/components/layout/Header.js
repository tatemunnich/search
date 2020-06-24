import React from "react";

function Header() {
    return (
        <header style={headerStyle}>
            <h1>App Search</h1>
        </header>
    )
}

const headerStyle = {
    padding: '10px',
    background: '#333333',
    color: '#a9a9a9'
}

export default Header