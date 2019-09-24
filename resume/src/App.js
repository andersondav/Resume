import React from 'react';
import './App.css';
import { PDFExport } from '@progress/kendo-react-pdf';
import myInfo from './myInfo'

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
                <div style={{backgroundColor: 'rgba(0, 0, 255, 0.1)',
                  position: 'absolute', 
                  height: '20%', 
                  width: '50%', 
                  margin: '6% 6%',
                  zIndex: 0}}></div>
                <div style={{backgroundColor: 'rgba(192, 192, 192, 1.0)',
                  height: '20%', 
                  width: '50%', 
                  margin: '5% 5%',
                  zIndex: 1}}>
                    <div style={{fontFamily: 'Cambria',  
                        padding: '5% 5%'}}>
                      <h1 style={{ margin: '0 0',
                        padding: '0 0',
                        fontSize: '30px', 
                        fontWeight: 'bold'}}>{this.state.name}</h1>
                        Phone #: {this.state.phoneNum} <br/>
                        Email Address: {email}
                    </div>
                </div>
          </div>
      </PDFExport>
    </div>
      
    );
  }
}


export default Resume;
