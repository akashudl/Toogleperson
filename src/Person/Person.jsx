import React from 'react';

const Person= (props)=>{
    return (
        <div>
            <p onClick={props.click} style={{textAlign:'Center'}}>This is {props.name} and my age is {props.age}</p>
            <input type="text" onChange={props.change} value={props.name} style={{alignItems:'Center'}}/>
        </div>
    );
}
export default Person;