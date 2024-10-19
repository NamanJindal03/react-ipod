import React, {useState} from 'react'

export default function Music({songProgressRef, currentSong}) {
    // const 
  return (
    <div className='songScreen'>
        <div className='songDetails'>
            <div className='songBoxContainer'></div>
        </div>
        <div>
            <div className='progress-container'>
                <div className='progress-bar' ref={songProgressRef}>

                </div>
            </div>
            <div className='song-progress-time'>
                <span>00:00</span>
                <span>{currentSong.duration}</span>
            </div>
        </div>
    </div>
  )
}
