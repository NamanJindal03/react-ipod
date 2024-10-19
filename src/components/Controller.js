import React, { Component } from 'react'
export default class Controller extends Component {
  render() {
    return (
        <div 
            className='controller' 
            ref={this.props.controllerRef}
            onMouseDown={(e)=>{
                e.stopPropagation();
                this.props.rotate();
                return;
            }}
        >
            <div className='controller-menu'>Menu</div>
            <div className='backward'>Back</div>
            <div className='forward'>Forw</div>
            <div className='play-pause'>PP</div>
            <div 
              className='controller-centre' 
              onClick={()=>{this.props.centreTap()}}
            ></div>
        </div>
    )
  }
}
