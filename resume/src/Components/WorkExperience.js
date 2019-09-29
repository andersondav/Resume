import React from 'react'
import myInfo from '../myInfo'
import {styles} from '../styles'

class WorkExperience extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            ...myInfo
        }
    }

    render() {
        return (
            <div style={{ width: '25%',  
            margin: '4% 4%',
            position: 'absolute',
            top: '65%',
            background: 'none'}}>
                <h1 style={{margin: '0 0'}}>Work Experience</h1>
                <p style={{margin: '3% 0 0 0', textDecoration: 'underline'}}>{this.state.workExperience.company}</p>
                <ul style={{margin: '2% 0'}}>
                    <li style={{margin: '0 0 0 -10px'}}>{this.state.workExperience.date} in {this.state.workExperience.location}</li>
                    <li style={{margin: '0 0 0 -10px'}}>Job title: {this.state.workExperience.title}</li>
                    <li style={{margin: '0 0 0 -10px'}}>{this.state.workExperience.desc}</li>
                </ul>
                <style>{styles}</style>
            </div>
        )
    }
}

export default WorkExperience