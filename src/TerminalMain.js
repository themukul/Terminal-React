import React, { Component } from 'react';
import TerminalPreviousOut from './TerminalPreviousOut';
import TerminalCurrentLine from './TerminalCurrentLine';

class TerminalMain extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            out: "Welcome to Mukul Goyal's terminal"
        }
    }

    render() {
        return(
            <div>
                <TerminalPreviousOut data={this.state.out} />
                <TerminalCurrentLine />    
            </div>
        );
    }

}

export default TerminalMain;