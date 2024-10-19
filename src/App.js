
import React, { Component } from 'react'
import Ipod from "./components/Ipod";
import './style/style.css'

export default class App extends Component {
  render() {
    return (
      <div className='applicationContainer'>
        <Ipod />
      </div>
    )
  }
}

