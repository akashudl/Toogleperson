import React, { Component } from 'react';
import "../App.css";
class DateandTime extends Component
{   constructor() {
    super();
    this.state = {currentDateTime: new Date().toLocaleTimeString()}
      this.updatedtime=this.updatedtime.bind();
      }   
    updatedtime=()=>
    {   console.log("Clicked");
        this.state.currentDateTime=new Date().toLocaleTimeString();
        this.setState({currentDateTime:this.state.currentDateTime});

    }
    render()
    {  
        
        
        return(
            <div className="diva">
                <h1>{this.state.currentDateTime}</h1>
                <button   onClick={this.updatedtime} className="buttona">Get time</button>
                </div>

        );
    }
}
export default DateandTime;
