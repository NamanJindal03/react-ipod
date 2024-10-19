import React, { Component } from 'react';
import ZingTouch from 'zingtouch';
import songs from '../assets/audio/audio';
import Display from './Display'
import Controller from './Controller';
import { screenIndexMapping } from '../constants';

class Ipod extends Component {
    constructor(){
        super();
        this.state = {
            currentScreenIndex: 1,
            menuActiveIndex: 0,
            dormantScreenIndex: 1, 
            currentSong: new Audio(songs.song1),
            isSongPlaying: false,
        }
        this.controllerRef = React.createRef();
        this.songProgressRef = React.createRef();
        // this.tempMenuIndexStore = React.createRef();
    }
    componentDidMount(){
        const temp = this.controllerRef.current;
        console.log(temp)
        this.controllerRingElem = new ZingTouch.Region(temp);
        this.state.currentSong.addEventListener("timeupdate", this.updateSongProgress)
    }

    updateSongProgress = () => {
        // console.log('is callig?')
        if(this.state.currentScreenIndex === screenIndexMapping.music){
            // console.log('entering');
            // console.log(this.songProgressRef);
            let duration = this.state.currentSong.duration;
            let currentTime = this.state.currentSong.currentTime;
            const progressPercent = (currentTime/duration) * 100
            console.log(`${(currentTime/duration) * 100}%`);
            this.songProgressRef.current.style.width = progressPercent + "%"
        }
    }
    

    rotate = () => {
        // this.tempMenuIndexStore = this.state.menuActiveIndex;
        this.controllerRingElem.bind(
            this.controllerRef.current, 
            'rotate',
            (e) => {
                e.stopPropagation();
                if(this.state.currentScreenIndex !== 1){
                    return;
                }
                // console.log('happening in rotate')
                // console.log(e)
                const rotationAmount = e.detail.angle;
                let menuActiveIndex = 0;
                if(rotationAmount >= 0 && rotationAmount <= 45){
                    menuActiveIndex = 0;
                }
                if(rotationAmount > 45 && rotationAmount <= 135){
                    menuActiveIndex = 1;
                }
                else if(rotationAmount > 135 && rotationAmount <= 225){
                    menuActiveIndex = 2;
                }
                else if(rotationAmount > 225 && rotationAmount <= 360){
                    menuActiveIndex = 3;
                }
                else if(rotationAmount > -90 && rotationAmount < 0){
                    menuActiveIndex = 3;
                }
                else if(rotationAmount >-180  && rotationAmount <= -90){
                    menuActiveIndex = 2;
                }
                else if(rotationAmount > -270 && rotationAmount <= -180){
                    menuActiveIndex = 1;
                }
                else if(rotationAmount > -360 && rotationAmount <= -270){
                    menuActiveIndex = 0;
                }
                this.setState({menuActiveIndex: menuActiveIndex})
                
                // if(rotationAmount >= 0 )
            }
        )
    }
    handleMenuControllerClick = () => {
        if(this.state.currentScreenIndex !== screenIndexMapping.coreMenu){
            this.setState({
                dormantScreenIndex: this.state.currentScreenIndex,
                currentScreenIndex: screenIndexMapping.coreMenu
            })
        }
        else{
            this.setState({
                currentScreenIndex: this.state.dormantScreenIndex
            })
        }
        
    }
    handlePlayPause = ()=>{
        if(this.state.isSongPlaying){
            this.state.currentSong.pause();
            this.setState({isSongPlaying: false})
        }
        else{
            this.state.currentSong.play()
            this.setState({isSongPlaying: true})
        }
    }

    centreTap = () => {
        if(this.state.currentScreenIndex === 1){
            this.setState({currentScreenIndex: this.state.menuActiveIndex + 2})
        }
    }

    render() {
        return (
            <div className='ipod'>
                <div className='ipod-top'>
                    <Display 
                        currentScreenIndex={this.state.currentScreenIndex}
                        menuActiveIndex={this.state.menuActiveIndex}
                        songProgressRef= {this.songProgressRef}
                        currentSong={this.state.currentSong}
                    />
                </div>
                <div className='ipod-bottom'>
                    <Controller 
                        controllerRef = {this.controllerRef}
                        rotate = {this.rotate}
                        centreTap = {this.centreTap}
                        handleMenuControllerClick= {this.handleMenuControllerClick}
                        handlePlayPause = {this.handlePlayPause}
                    />
                </div>
            </div>
        );
    }
}

export default Ipod;