import React from "react";
//value={props.value} 
//<input type="submit"></input>

const Row = props => (
    <div className={props.rowClassName}>

    <label htmlFor={props.fortag} >{props.display}: </label>
    <input className={props.testName} type={props.type} placeholder={props.placeholder} 
    id={props.inputId} name={props.inputName} onKeyDown={props.onKeyDown}
    onChange={props.onChange} required></input>
    
  
    </div>
  
);

export default Row;
