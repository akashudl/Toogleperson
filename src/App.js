import logo from './logo.svg';
import './App.css';
import { Component, useState } from 'react';
import Person from './Person/Person';
class App extends Component
{  state ={
  persons:[
    {id:'1',name :"Akash",age:23},
    {id:'2',name:"Saurav",age:24},
    {id:'3',name :"Gaurva",age:24} 
  ],
  showperson:false
}
tooglepersonshow=()=>
{
  const doeshsow=this.state.showperson;
  this.setState({showperson:!doeshsow});
}
deletechangehandler=(personindex)=>
{
 const persons=[...this.state.persons]//or we can use const persons=[...this.state.persons] spread operator immutable manner 
 persons.splice(personindex,1);
 this.setState({persons:persons})
}
switchnamehandler=(event,id)=>
{  const personindex=this.state.persons.findIndex(p=>
  {
return p.id===id ;
 });
 const person={
   ...this.state.persons[personindex]
  };
  person.name=event.target.value;
  const persons=[...this.state.persons];
  persons[personindex]=person;



  this.setState(
{persons:persons});
}
 
  render()
  {      let person=null;
    if(this.state.showperson)
    {
      person=(
        <div>
          {this.state.persons.map((per,index)=>{
            return <Person
            click={()=>this.deletechangehandler(index)}
            name={per.name}
            age={per.name}
            key={per.id}
            change={(event)=>this.switchnamehandler(event,per.id)}
            />
          })}
        </div>
      );
    }
    return (
          <div style={{background:"grey"}}>
          <h1 style={{textAlign:'Center'}}>Welcome To React</h1>
          <button onClick={this.tooglepersonshow} style={{alignItems:"center"}}>Toogle Person</button>
             {person}   
                      </div>
    );
  }
}

export default App;
