import React, { Component } from 'react'

export class Test extends Component {
constructor() {
    super();
    this.state = {
        items : 0,
    }
    console.log("First");
}
componentDidMount(){
    console.log("Second");
}
componentDidUpdate(){
    console.log("Updated");
}
componentWillUnmount(){
  alert("Component Unmount");
}
handledclick = ()=>{
  this.setState({items :this.state.items + 1});
}


  render() {
    console.log("third");
    return (
      <>
      <p>Items : {this.state.items}</p>
      <button onClick={this.handledclick}>Test</button>
      </>
    )
  }
}

export default Test