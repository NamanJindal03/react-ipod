import React from 'react'
import images from '../../assets/image/image'
import Menu from '../Menu'
import { mainMenuOptions } from '../../constants'
export default function CoreMenu({menuActiveIndex}) {
    
  return (
    <div className='screenContainer'>
        <img src={images.coreMenuImage} className='screenImage'/>
        <Menu 
          menuOptions={mainMenuOptions} 
          menuTitle={"IPOD"}
          menuActiveIndex={menuActiveIndex}
        />
    </div>
  )
}
