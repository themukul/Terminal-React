import React, { Component } from 'react';

class TerminalPreviousOut extends React.Component {

    constructor(props){
        super(props);
    }

    render() {
        return(
            <div>{this.props.data}</div>
        );
    }

}

export default TerminalPreviousOut;