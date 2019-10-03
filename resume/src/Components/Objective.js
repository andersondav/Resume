import React from 'react';
import myInfo from '../myInfo';

class Objective extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ...myInfo
        }
    }

    render() {
        return (
            <div style={{
            margin: '0 0 2% 0',
            padding: '0 0', 
            background: 'none'}}>
                <h1 style={{padding: '0 0 0 0', margin: '0 0'}}>Objective</h1>
                <p style={{margin: '0 0 0 0'}}>{this.state.objective}</p>
            </div>
        )
    }
}

export default Objective