import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
    Clock() {
        return (
          <div>
            <h1>Hello, world!</h1>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
          </div>
        );
      }
  
      constructor(props) {
        super(props)
        this.state = {
         color:"red"
        }
      } 
      getInitialState(){
          return{
              liked:false
          };
      }
      handleclick(){
          this.setState({liked:!this.state.liked})
      }
      Clock() {
        return (
       <p>mmmmmmmmmmmm</p>
          
        );
      }

    render() {
        var names = ['Jack', 'Tom', 'Alice'];
        var arr = [
            <h1 key="1">Hello world!</h1>,
            <h2 key="2">React is awesome</h2>,
        ];
        var text = this.state.liked?'喜欢':'不喜欢'
        return ( 
        <div className = "App" >
            <header className = "App-header">
            <p> 学习react第一天 </p> 
            <img src={logo} className="App-logo" alt="logo" / >
            <h1 className = "App-title" > Welcome to React </h1> 
            <p onClick={this.handleclick.bind(this)}>你 {text}我</p>  
            </header >
            <p className = "App-intro" > To get started, edit < code > src / App.js </code> and save to reload. </p >


            <p  style={{color:this.state.color}}>手工牛奶棒！ </p>
            <div>
            {
              names.map(function (name) {
                return <ol><li>Hello, {name}!</li></ol>
              })
            }
            </div>,
            <div>{arr}</div>
            <div>{this.Clock.bind(this)}</div>
            <Text/>
          
        </div>   
        );
    }
}
class Text extends Component {
     Clock() {
        return (
          <div>
    
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
          </div>
        );
      }
    render(){
        var title ="鱼子酱"
        return(
           
            <p className="Tes"> {this.Clock.bind(this)}</p>
            
        );
    }
}

export default App;