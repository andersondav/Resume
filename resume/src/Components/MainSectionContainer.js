import React from 'react';
import Objective from './Objective';
import Coursework from './Coursework';
import Projects from './Projects';

class MainSectionContainer extends React.Component {
    render() {
        return (
            <div style={{position: 'absolute', 
            top: '23%',
            left: '33%',
            background: 'none',
            margin: '0 4% 0 0'
            }}>
                <Objective/>
                <Coursework/>
                <Projects githubs={this.props.projectGithubs} links={this.props.projectLinks}/>
            </div>
        )
    }
}

export default MainSectionContainer;