import React from "react";
import './Ficha.css'


function Ficha(props) {
    
    return(

            <article className="data-detail">
                <div className="card-content">
                    <h4>{props.ficha.tit}</h4>
                    <p>{props.ficha.sub}</p>
                </div>
                <i class={props.ficha.icono}></i>
            </article>

    )
    
};

export default Ficha;