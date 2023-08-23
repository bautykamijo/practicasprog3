import React from 'react';
import './Navbar.css';

function Navbar(props) {

    return (
        <nav>
        <ul className="main-nav">
            {props.titulos.map((titulo, idx) => <li key={titulo + idx}>{titulo}</li>)}
        </ul>
        <ul className="user">
            <li>{props.user.nombre} <img src={props.user.foto} alt=""/></li>
        </ul>
    </nav>  

)};

export default Navbar;