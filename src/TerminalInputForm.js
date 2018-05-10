import React, { Component } from 'react';

class TerminalInputForm extends React.Component {

    constructor(props){
        super(props);

        this.state = {

        }
    }

    render() {
        return(
            <div>
                <input name="terminalIn" type="text" value="" />
            </div>
        );
    }
}

export default TerminalInputForm;