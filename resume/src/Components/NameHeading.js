import '../App.css'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import MyInfo from '../myInfo'
import canvg from 'canvg'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {styles} from '../styles'

class NameHeading extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
          ...MyInfo,
          showLinks: true
      }

      this.iconsToConvert = [
        {
          icon: faEnvelope,
          alt: 'Email:'
        },
        {
          icon: faGithub,
          alt: 'Github icon:'
        },
        {
          icon: faLinkedin,
          alt: 'Linked in:'
        }
      ]

      this.canvLoaded = false;
    }

    convertSVGToImage = (arr) => {
      let canv = this.refs.canvas;
      if (!this.canvLoaded) {
        this.canvLoaded = true;
        canv.getContext("2d");
        arr.forEach((d, i) => {
          let htmlString = ReactDOMServer.renderToStaticMarkup(
            <FontAwesomeIcon icon={d.icon} size={"3x"} style={{ color: 'black', height: '500px', width: '500px' }}/>
          )
          canvg(canv, htmlString);
          d.icon = canv.toDataURL("image/png");
        })
      }
    }

    componentDidMount() {
      this.convertSVGToImage(this.iconsToConvert);
      this.setState({})
    }

    render() {
      return (
        <div>
        <div style={{backgroundColor: 'black',
          position: 'absolute', 
          height: '19%', 
          width: '55%', 
          margin: '4% 4%',
          zIndex: 0}}></div>
          <div style={{backgroundColor: 'rgba(192, 192, 192, 1.0)',
            height: '19%', 
            position: 'absolute',
            width: '55%', 
            margin: '3% 3%',
            zIndex: 1}}>
            <div style={{padding: '3% 5%'}}>
              {!this.canvLoaded && <canvas ref="canvas" style={{ display: 'none' }}></canvas>}
              <h1 style={{ margin: '0 0',
                padding: '0 0', fontSize: '30px'}}>{this.state.name}</h1>
                <p style={{ background: 'none', padding: '0 0', margin: '0 0'}}>Phone: {this.state.phoneNum}</p>
                {this.canvLoaded && 
                <img src={this.iconsToConvert[0].icon} 
                    key={'img-' + 0} alt={this.iconsToConvert[0].alt} 
                    style={{ position: 'absolute', top: '43%', height: 25, width: 25 }}/>}
                  <p style={{ background: 'none', padding: '0 0', margin: '6px 0 0 30px'}}> {this.props.email}</p>
                {this.canvLoaded && 
                <img src={this.iconsToConvert[1].icon} 
                    key={'img-' + 1} alt={this.iconsToConvert[1].alt} 
                    style={{ position: 'absolute', top: '60%', height: 25, width: 25 }}/>}
                  <p style={{ background: 'none', padding: '0 0', margin: '9px 0 0 30px'}}>{this.props.github}</p>
                {this.canvLoaded &&
                <img src={this.iconsToConvert[2].icon} 
                    key={'img-' + 2} alt={this.iconsToConvert[2].alt} 
                    style={{ position: 'absolute', top: '77%', height: 25, width: 25 }}/>}
                  <p style={{ background: 'none', padding: '0 0', margin: '9px 0 0 30px'}}>{this.props.linkedIn}</p>
            </div>
          </div>
          <style>{styles}</style>
        </div>
      )
  }
}

export default NameHeading