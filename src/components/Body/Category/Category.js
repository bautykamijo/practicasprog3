import React from "react";
import './Category.css';

function Category(props) {
    return(
        <article className="card">
                <p>Category {props.num}</p>
            </article>
    )
};

export default Category;