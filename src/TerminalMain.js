import React, { Component } from 'react';
import TerminalPreviousOut from './TerminalPreviousOut';
import TerminalCurrentLine from './TerminalCurrentLine';

class TerminalMain extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            data: [{
                key: 0,
                text: "Welcome to Mukul's terminal"
            }]
        }
    }

    getNewData = (data) => {
        const currentState = this.state.data;
        const newKey = currentState.key + 1;
        const newState = currentState.concat({ text: data, key: newKey });
        console.log(newState);
        this.setState(newState);
    }

    render() {

        const batch = "ubuntu@ubuntu:~$";

        return(
            <div>
                <TerminalPreviousOut data={this.state.data} />
                <TerminalCurrentLine batch={batch} sendData={this.getNewData} />    
            </div>
        );
    }

}

export default TerminalMain;