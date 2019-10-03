import React from 'react';
import myInfo from '../myInfo';

class Activities extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            ...myInfo
        }
    }

    render() {
        return (
        <div style={{margin: '0 0',
        padding: '0 0'}}>
            <h1 style={{margin: '0 0', padding: '0 0'}}>Activities</h1>
            <ul style={{margin: '2% 0', padding: '0 0 0 10%'}}>
                {this.state.activities.map((activity, index) => {
                    return (
                        <li style={{padding: '0 0', margin: '0 0'}}>{`${activity.name} (${activity.dates})`}</li>
                    )
                })
                }    
            </ul>
        </div>
        )
    }
}

export default Activities;