import React from 'react';
import './App.css';
import { PDFExport } from '@progress/kendo-react-pdf';
import { defineFont } from '@progress/kendo-drawing/pdf'
import myInfo from './myInfo'
import NameHeading from './Components/NameHeading'

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

    if (!this.state.showLinks) {
        email = <p style={{ padding: '0 0', margin: '0 0'}}>{this.state.email}</p>
        github = <p style={{ padding: '0 0', margin: '0 0'}}>{this.state.github}</p>
        linkedIn = <p style={{ padding: '0 0', margin: '0 0'}}>{this.state.linkedIn}</p>
    }
    else {
        email = <a style={{color: 'blue'}} href={`mailto:david25@purdue.edu`}>{this.state.email}</a>
        github = <a style={{color: 'blue'}} target='_blank' href={'https://github.com/andersondav'}>{this.state.github}</a>
        linkedIn = <a style={{color: 'blue'}} target='_blank' href={'https://linkedin.com/in/anderson-david/'}>{this.state.linkedIn}</a>
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
          </div>
      </PDFExport>
    </div>
      
    );
  }
}


export default Resume;
