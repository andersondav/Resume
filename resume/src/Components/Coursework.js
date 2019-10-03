import React from 'react';
import myInfo from '../myInfo';

class Coursework extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ...myInfo
        }
    }

    render() {
        return (
            <div style={{margin: '0 0 2% 0', 
            padding: '0 0',  
            background: 'none'}}>
                <h1 style={{margin: '0 0', padding: '0 0'}}>Relevant Coursework</h1>
                <p style={{margin: '0 0 0 0', padding: '0 0'}}>{this.state.coursework}</p>
            </div>
        )
    }
}

export default Coursework