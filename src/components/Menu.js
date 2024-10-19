import React from 'react'

export default function Menu({menuOptions, menuTitle, menuActiveIndex}) {

  const activeMenuIndex = (index) => {
    if(menuActiveIndex === index){
      return {backgroundColor: 'rgb(42, 206, 225)'}
    }
  }
  return (
    <div className='menu'>
        <div className='menuTitle'>{menuTitle}</div>
        {
            menuOptions.map((option, index)=>{
                return <div key={index} style={activeMenuIndex(index)}>{option}</div>
            })
        }
    </div>
  )
}
