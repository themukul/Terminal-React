import React, { Component } from 'react';
import TerminalInputForm from './TerminalInputForm';

class TerminalCurrentLine extends React.Component {
    
    constructor(props){
        super(props);
    }

    render() {
        return(
            <div>
                <span>ubuntu@ubuntu:~$</span><div className="blinking-cursor"></div><div></div>

                <TerminalInputForm />
            </div>
        );
    }
}

export default TerminalCurrentLine;