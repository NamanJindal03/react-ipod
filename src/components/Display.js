import React, { Component } from 'react'
import { screenIndexMapping } from '../constants';
import CoreMenu from './screens/CoreMenu';
import Games from './screens/Games';
import Coverflow from './screens/Coverflow';
import Music from './screens/Music';


export default function Display(props) {
  const {
    currentScreenIndex,
    menuActiveIndex,
    songProgressRef,
    currentSong
  } = props

  if(currentScreenIndex === screenIndexMapping.coreMenu){
    return <CoreMenu menuActiveIndex={menuActiveIndex}/>
  }
  else if(currentScreenIndex === screenIndexMapping.coverFlow){
    return <Coverflow />
  }
  else if(currentScreenIndex === screenIndexMapping.games){
    return <Games />
  }
  else if(currentScreenIndex === screenIndexMapping.music){
    return <Music 
      songProgressRef={songProgressRef}
      currentSong= {currentSong}
    />
  }
  else{
    return <div>No Screen</div>
  }
}





// const DynamicComponentScreen = IpodScreens[currentScreenIndex];
//   console.log(DynamicComponentScreen)
//   return (
//     <DynamicComponentScreen />
//   )