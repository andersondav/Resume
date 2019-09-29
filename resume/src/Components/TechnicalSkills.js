import React from 'react'
import MyInfo from '../myInfo'
import '../App.css'
import {styles} from '../styles'

class TechnicalSkills extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            ...MyInfo
        }
    }

    render() {
        return (
            <div style={{ width: '25%',  
            margin: '4% 4%',
            position: 'absolute',
            top: '23%',
            background: 'none'}}>
                <h1 style={{margin: '0 0'}}>Technical Skills</h1>
                <p style={{margin: '3% 0 0 0', textDecoration: 'underline'}}>Proficient in:</p>
                <p style={{margin: '0 0'}}>
                {this.state.technicalSkills.proficient.map((skill, index, arr) => {
                    if (index != arr.length - 1) {
                        return `${skill}, `
                    } else {
                        return `${skill}`
                    }
                })}</p>
                <p style={{margin: '3% 0 0 0', textDecoration: 'underline'}}>Basic knowledge of:</p>
                <p style={{margin: '0 0'}}>
                {this.state.technicalSkills.basic.map((skill, index, arr) => {
                    if (index != arr.length - 1) {
                        return `${skill}, `
                    } else {
                        return `${skill}`
                    }
                })}</p>
                <style>{styles}</style>
            </div>
        )
    }
}

export default TechnicalSkills