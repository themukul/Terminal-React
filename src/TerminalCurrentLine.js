import React, { Component } from 'react';
// import TerminalInputForm from './TerminalInputForm';

class TerminalCurrentLine extends React.Component {
    
    constructor(props){
        super(props);

        this.state={
            
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    handleChange = (event) => {
        console.log(event.target.name);
        this.setState({
            [event.target.name]: event.target.value
        });    
    }

    handleKeyPress = (event) => {
        if(event.key == 'Enter'){
            console.log('enter press here! ');
            this.props.sendData(event.target.value);
        }
    }

    render() {
        return(
            <div>
                <span>{this.props.batch}</span><div className="blinking-cursor"></div><div>{this.state.terminalIn}</div><input name="terminalIn" type="text" onChange={this.handleChange} onKeyPress={this.handleKeyPress} />

                {/* <TerminalInputForm /> */}
            </div>
        );
    }
}

export default TerminalCurrentLine;