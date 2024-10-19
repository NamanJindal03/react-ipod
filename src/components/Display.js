import React, { Component } from 'react'
import IpodScreens from '../constants'
import CoreMenu from './screens/CoreMenu';



export default function Display(props) {
  const {
    currentScreenIndex,
    menuActiveIndex
  } = props

  if(currentScreenIndex === 1){
    return <CoreMenu menuActiveIndex={menuActiveIndex}/>
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