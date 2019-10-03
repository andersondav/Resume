import React from 'react'
import ReactDOMServer from 'react-dom/server'
import MyInfo from '../myInfo'
import { faUniversity } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import canvg from 'canvg'
import {styles} from '../styles'

class Education extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            ...MyInfo
        }

    }

    render() {
        return (
            <div style={{backgroundColor: 'none',
            height: '18%', 
            position: 'absolute', 
            width: '37%',
            marginTop: '3%',
            marginLeft: '63%',
            zIndex: 1}}>
                <h1 style={{margin: '1% 3%', padding: '0 0'}}>Education</h1>
                <p style={{margin: '0 3%'}}>{this.state.education.school}</p>
                <p style={{margin: '0 3%'}}>({this.state.education.location})</p>
                <ul style={{margin: '0 0'}}>
                    <li style={{margin: '1% 0 1% 0'}}>{this.state.education.degree}</li>
                    <li style={{margin: '1% 0 1% 0'}}>{this.state.education.degree2}</li>
                    <li style={{margin: '1% 0 1% 0'}}>GPA: {this.state.education.gpa}</li>
                    <li style={{margin: '1% 0 1% 0'}}>{this.state.education.gradDate}</li>
                </ul>
                <style>{styles}</style>
            </div>
        )
    }


}

export default Education