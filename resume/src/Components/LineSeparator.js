import React from 'react'

class LineSeparator extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div style={{position: 'absolute', 
            borderLeft: '1px solid black', 
            height: '73%', 
            top: '25%',
            left: '30%'}}></div>
        )
    }
}

export default LineSeparator