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
            <div style={{margin: '0 0 4% 0',
            background: 'none'}}>
                <h1 style={{margin: '0 0'}}>Work Experience</h1>
                <p style={{margin: '0 0 0 0', textDecoration: 'underline'}}>{this.state.workExperience.company}</p>
                <ul style={{margin: '2% 0', padding: '0 0 0 10%'}}>
                    <li style={{margin: '0 0 0 0'}}>{this.state.workExperience.date} in {this.state.workExperience.location}</li>
                    <li style={{margin: '0 0 0 0'}}>Job title: {this.state.workExperience.title}</li>
                    <li style={{margin: '0 0 0 0'}}>{this.state.workExperience.desc}</li>
                </ul>
                <style>{styles}</style>
            </div>
        )
    }
}

export default WorkExperience