import React, { Component } from 'react';

// class TerminalPreviousOut extends React.Component {

//     constructor(props){
//         super(props);
//     }

//     render() {
//         const outList = this.props.data.map((out) => {
            
//                 <div key={out.key}>
//                     out.text
//                 </div>
            
//         });

//         return(
//             <div>
//                 {this.props.data.map((out) => {
//                     return (
//                         <div>
//                             {outList}
//                         </div>
//                     );
//                 })}
//             </div>
//         );
//     }

// }

const TerminalPreviousOut = (props) => {
    const outList = props.data.map((out) => {        
        <li key={out.key}>{out.text}</li>
    });
    
    return (
        <ul>{outList}</ul>
    );
}

export default TerminalPreviousOut;