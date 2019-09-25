import React from 'react'
import MyInfo from '../myInfo'

class NameHeading extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            ...MyInfo,
            showLinks: true
        }
    }

    render() {
        return (
            
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
                    width: '55%', 
                    margin: '6% 6%',
                    zIndex: 0}}></div>
                  <div style={{backgroundColor: 'rgba(192, 192, 192, 1.0)',
                    height: '20%', 
                    position: 'absolute',
                    width: '55%', 
                    margin: '5% 5%',
                    zIndex: 1}}>
                      <div style={{fontFamily: 'Roboto Slab',  
                          padding: '5% 5%'}}>
                        <h1 style={{ margin: '0 0',
                          padding: '0 0',
                          fontSize: '30px', 
                          fontWeight: 'bold'}}>{this.state.name}</h1>
                          Phone: {this.state.phoneNum} <br/>
                          Email Address: {this.props.email}<br/>
                          <img src="./../../svgs/ios-add.svg" alt="svg"></img>
                      </div>
                  </div>
            </div>
        )
    }
}

export default NameHeading