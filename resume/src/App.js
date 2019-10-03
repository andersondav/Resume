import React from 'react';
import './App.css';
import { PDFExport } from '@progress/kendo-react-pdf';
import { defineFont } from '@progress/kendo-drawing/pdf'
import myInfo from './myInfo'
import NameHeading from './Components/NameHeading'
import Education from './Components/Education'
import LineSeparator from './Components/LineSeparator';
import TechnicalSkills from './Components/TechnicalSkills'
import WorkExperience from './Components/WorkExperience'
import {styles} from './styles'
import SoftSkills from './Components/SoftSkills';
import Objective from './Components/Objective'
import Coursework from './Components/Coursework'
import Projects from './Components/Projects'
import MainSectionContainer from './Components/MainSectionContainer';
import SideSectionContainer from './Components/SideSectionContainer';

class Resume extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      ...myInfo,
      showLinks: false,
      linkStatus: 'Show hyperlinks'
    }
  }

  toggleLinks = () => {
    if (this.state.linkStatus === 'Show hyperlinks') {
      this.setState({
        showLinks: true,
        linkStatus: 'Remove hyperlinks'
      })
    }
    else {
      this.setState({
        showLinks: false,
        linkStatus: 'Show hyperlinks'
      })
    }
  }

  exportPDF = () => {
    this.resume.save();
  }

  render = () => {
    let email;
    let github;
    let linkedIn;
    var projectGithubs;
    var projectLinks;

    if (!this.state.showLinks) {
        email = <p style={{ padding: '0 0', margin: '0 0'}}>{this.state.email}</p>
        github = <p style={{ padding: '0 0', margin: '0 0'}}>{this.state.github}</p>
        linkedIn = <p style={{ padding: '0 0', margin: '0 0'}}>{this.state.linkedIn}</p>
        projectGithubs = this.state.projects.map((project, index) => {
          return <p style={{ padding: '0 0', margin: '0 0'}}>{project.github}</p>
        })
        projectLinks = this.state.projects.map((project, index) => {
          return <p style={{ padding: '0 0', margin: '0 0'}}>{project.link}</p>
        })
    }
    else {
        email = <a style={{color: 'blue'}} href={`mailto:david25@purdue.edu`}>{this.state.email}</a>
        github = <a style={{color: 'blue'}} target='_blank' href={`https://${this.state.github}`}>{this.state.github}</a>
        linkedIn = <a style={{color: 'blue'}} target='_blank' href={`https://${this.state.linkedIn}`}>{this.state.linkedIn}</a>
        projectGithubs = this.state.projects.map((project, index) => {
          return <a style={{color: 'blue'}} target='_blank' href={`${project.github}`}>{project.github}</a>
        })
        projectLinks = this.state.projects.map((project, index) => {
          return <a style={{color: 'blue'}} target='_blank' href={`${project.link}`}>{project.link}</a>
        })
    }
    return (
    <div>
      <button onClick={this.exportPDF}>Download</button>
      <button onClick={this.toggleLinks}>{this.state.linkStatus}</button>
      <PDFExport
        fileName="AndersonDavid.pdf"
        title=""
        subject=""
        keywords=""
        ref={(r) => this.resume = r}>
          <div style={{
              height: 792,
              width: 612,
              padding: 'none',
              position: 'relative',
              backgroundColor: 'white',
              boxShadow: '5px 5px 5px black',
              margin: 'auto',
              overflowX: 'hidden',
              overflowY: 'hidden'}}>
            <NameHeading email={email} github={github} linkedIn={linkedIn}/>
            <Education/>
            <LineSeparator/>
            <SideSectionContainer/>
            <MainSectionContainer projectGithubs={projectGithubs} projectLinks={projectLinks}/>
          </div>
      </PDFExport>
      <style>{styles}</style>
    </div>
      
    );
  }
}


export default Resume;
