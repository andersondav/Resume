import React from 'react';
import myInfo from '../myInfo'
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import ReactDOMServer from 'react-dom/server'
import canvg from 'canvg';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

class Projects extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ...myInfo
        };
        this.canvLoaded = false;
        this.iconsToConvert = [
            {
                icon: faGithub,
                alt: "Github:"
            },
            {
                icon: faLink,
                alt: "Weblink:"
            }
        ]
    }

    componentDidMount() {
        this.convertSVGsToImages(this.iconsToConvert);
        this.setState({});
    }

    convertSVGsToImages = (arr) => {
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



    render() {
        return (
            <div style={{margin: '0 0',
            padding: '0 0', 
            background: 'none'}}>
                {!this.canvLoaded && <canvas ref="canvas" style={{ display: 'none' }}></canvas>}
                <h1 style={{margin: '0 0',
                padding: '0 0'}}>Projects</h1>
                {
                    this.state.projects.map((project, index, arr) => {
                        return (
                            <div style={{margin: '0 0',
                                padding: '0 0', background: 'none'}}>
                                <div style={{margin: '0 0',
                                padding: '0 0',
                                display: 'flex',
                                background: 'none'}}>
                                    <p style={{display: 'inline-block', 
                                    margin: '0 0', 
                                    padding: '0 0',
                                    textDecoration: 'underline',
                                    background: 'none'}}>
                                        {project.title}
                                    </p>
                                    <p style={{display: 'inline-block', 
                                    margin: '0 0 0 auto', 
                                    padding: '0 0', 
                                    background: 'none'
                                    }}>
                                        {project.type} - {project.date}
                                    </p>
                                </div>
                                <div style={{margin: '1% 0 0 0',
                                display: 'flex',
                                height: '20px',
                                background: 'none'}}>
                                    {this.canvLoaded && 
                                    <img src={this.iconsToConvert[0].icon} 
                                        key={'img-' + 0} alt={this.iconsToConvert[0].alt} 
                                        style={{height: 20, width: 20}}/>}
                                    <div style={{position: 'relative', top: '15%', margin: '0 2% 0 1%', padding: '0 0'}}>{this.props.githubs[index]}</div>
                                    {project.link != null && this.canvLoaded && 
                                    <div style={{margin: '0 0', padding: '0 0', display: 'flex'}}>
                                        <img src={this.iconsToConvert[1].icon} 
                                            key={'img-' + 1} alt={this.iconsToConvert[1].alt} 
                                            style={{height: 20, width: 20}}/>
                                        <div style={{position: 'relative', top: '15%', margin: '0 0 0 2%', padding: '0 0'}}>{this.props.links[index]}</div>
                                    </div>}
                                </div>
                                <div style={{margin: '1% 0', 
                                padding: '0 0'}}>
                                    <ul style={{margin: '0 0', padding: '0 0 0 5%'}}>
                                        {project.info.map((point, index) => {
                                            var words = point.split(" ");
                                            var wordEls = words.map((word, index) => {
                                                if (project.keywords.includes(word) || project.keywords.includes(word.replace(",","")) || project.keywords.includes(word.replace(".",""))) {
                                                    if (index != words.length) {
                                                        return <p style={{display: 'inline-block', padding: '0 0', margin: '0 0', fontWeight: 'bold'}}>{word}<span>&nbsp;</span></p>
                                                    }
                                                    else {
                                                        return <p style={{display: 'inline-block', padding: '0 0', margin: '0 0', fontWeight: 'bold'}}>{word}</p>
                                                    }
                                                }
                                                else {
                                                    if (index != words.length) {
                                                        return <p style={{display: 'inline-block', padding: '0 0', margin: '0 0'}}>{word}<span>&nbsp;</span></p>
                                                    }
                                                    else {
                                                        return <p style={{display: 'inline-block', padding: '0 0', margin: '0 0'}}>{word}</p>
                                                    }
                                                }
                                            })
                                            
                                            return (<li><span>{wordEls}</span></li>)
                                        })
                                        }
                                    </ul>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}

export default Projects