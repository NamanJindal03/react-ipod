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
            <div 
              className='controller-menu'
              onClick={()=>{this.props.handleMenuControllerClick()}}
            >Menu</div>

            <div className='backward'>Back</div>
            <div className='forward'>Forw</div>
            <div 
              className='play-pause'
              onClick={()=>{this.props.handlePlayPause()}}
            >PP</div>

            {/* center button */}
            <div 
              className='controller-centre' 
              onClick={()=>{this.props.centreTap()}}
            ></div>
        </div>
    )
  }
}
