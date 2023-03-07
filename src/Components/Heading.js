import React from "react";

function Heading(props){
    const heading=props.headings;
    return(
        <div>
      <form style = {Style}>
        <h1>{HeadingText}</h1>
        <input type="text" placeholder='mobile...'></input>
    <br></br>
    <br></br>
        <input type= "text" placeholder= "password.."/>
    <br></br>
    <br></br>    
        <button>{ButtonText}</button>
      </form>
    

    </div>
    )
}
export default Heading;