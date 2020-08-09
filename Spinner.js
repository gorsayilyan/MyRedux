import React from 'react';
import spiner from "./spiner.gif"

function Spinner() {
    return (
        <div>
            <img
                src={spiner}
                style={{width: "200px",margin: "auto", display: "block"}}
                alt="Loading..."
            />
        </div>
    )
}

export default Spinner
