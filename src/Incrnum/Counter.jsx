import React, { Component } from 'react';
class Counter extends Component{

       
      constructor(props) {
        super(props);
        this.state = {count: 0};
        this.Incrnum=this.Incrnum.bind(this)
        this.Decrnum=this.Decrnum.bind(this)
      }
    
     Incrnum()
      {  
        console.log("clicked");
         
         this.setState({count:this.state.count+1});
      }
      Decrnum()
      {
             if(this.state.count>0)    
              this.setState({count:this.state.count-1});
           else
            this.setState({count:0});
         
      }
    render()
    {  const mystyle={
        backgroundColor: "#4CAF50",
        border: "none",
        color: "white",
        padding: "15px 32px",
        textAlign: "center",
        textDecoration: "none",
        display: "inline-block",
        fontSize: "16px",
        margin: "4px 2px",
        cursor: "pointer",
    };
     const diva={
        width: "400px",
        border: "15px solid green",
        padding: "50px",
        margin: "150px",
        alignSelf:"center",
        textAlign:"center"
     };
        return (
            <div style={diva}>
                <h1 >Counter</h1>
                <h1 style={{textAlign:"center"}}>{this.state.count}</h1>
               <button onClick={this.Incrnum} style={mystyle}>Increment</button> 
               <button onClick={this.Decrnum} style={mystyle}>Decrement</button> 
            </div>


        );
    }


}
export default Counter;