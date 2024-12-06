import React, { Component } from 'react'

export class MountClass extends Component {
    constructor(){
        super();
        this.state = {
            items :[]
        }
        console.log("first");
    }

componentDidMount(){
    console.log("second");
}

  render() {
    console.log("Third");
    return (
    <div>MountClass</div>
    )
}
}

export default MountClass