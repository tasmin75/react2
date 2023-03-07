import React from "react";

const Heading1 =(props)=>{
    return (
        <div>
            <h1>{props.heading}</h1>
            <input type="text" placeholder="mobile" />
            <br /><br />
            <input type="text" placeholder="password" />
            <br /><br />
            <button>{props.button}</button>
        </div>
    )
}
 export default Heading1