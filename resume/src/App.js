import React from 'react';
import './App.css';
import { PDFExport } from '@progress/kendo-react-pdf';
import myInfo from './myInfo'
import NameHeading from './Components/NameHeading'

class Resume extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      ...myInfo,
      showLinks: true,
      linkStatus: 'Remove hyperlinks'
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

    if (!this.state.showLinks) {
        email = <span>{this.state.email}</span>
    }
    else {
        email = <a href={`mailto:david25@purdue.edu`}>{this.state.email}</a>
    }
    return (
    <div>
      <button onClick={this.exportPDF}>Download</button>
      <button onClick={this.toggleLinks}>{this.state.linkStatus}</button>
      <PDFExport
        fileName="_____.pdf"
        title=""
        subject=""
        keywords=""
        ref={(r) => this.resume = r}>
          <NameHeading email={email}/>
      </PDFExport>
    </div>
      
    );
  }
}


export default Resume;
