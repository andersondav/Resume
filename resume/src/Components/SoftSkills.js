import React from 'react'
import myInfo from '../myInfo'
import { styles } from '../styles'

class SoftSkills extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            ...myInfo
        }
    }

    render() {
        return (
            <div style={{margin: '4% 0',
            background: 'none'}}>
                <h1 style={{margin: '0 0'}}>Soft Skills</h1>
                <p style={{margin: '0 0 0 0'}}>
                    {this.state.softSkills.map((skill, index, arr) => {
                        if (index != arr.length - 1) {
                            return `${skill}, `
                        }
                        else {
                            return `${skill}`
                        }
                    })
                }</p>
            </div>
        )
    }
}

export default SoftSkills