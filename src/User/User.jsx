import React from'react';

const User=(props)=>
{ const mystyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial",
    textAlign:"Center"
  };
    return  (   
        <div >
            <h2 style={mystyle}>Hi this is {props.username}</h2>
        </div>
    );
};

export default User;