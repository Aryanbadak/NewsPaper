import React, { Component } from 'react'


export default class Uparrow extends Component {

  scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  }

  render() {
    return (
      <div className='position-relative'>
        <div className='uparrow-container' onClick={this.scrollToTop}>
          <img src="uparrow.png" alt="arrow" />
        </div>
      </div>
    )
  }
}
