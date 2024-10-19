import React from 'react'
import images from '../../assets/image/image'

export default function Coverflow() {
  return (
    <div className='screenContainer'>
        <img src={images.coverflowImage} className='screenImage'/>
    </div>
  )
}
