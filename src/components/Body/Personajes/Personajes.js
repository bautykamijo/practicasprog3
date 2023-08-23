import React from "react";
import './Personajes.css'

function Personajes(props) {
    return(
        <article className="character-card">
        <img className="foto-carta" src={props.monstruo.foto} alt="" />
        <div>
        <h4>{props.monstruo.nombre}</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipiscing, elit fringilla inceptos id laoreet facilisi faucibus, rutrum viverra ligula vel potenti. Dapibus nascetur massa parturient lacus eleifend aliquam morbi, elementum vel vestibulum convallis tempus cursus ultrices nullam, nostra donec dignissim quam pharetra lobortis. Neque mollis phasellus volutpat tempus lobortis, ultricies quisque interdum. </p>
        <a href={props.monstruo.foto}>Ver más</a>
        </div>
    </article>
    )

}

export default Personajes;